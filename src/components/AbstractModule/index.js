/**
 *
 * AbstractModule
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import AbstractPage from '../AbstractPage';
import Notification from '../Notification';

import { request, parseRequestItemsIDs } from '../../base/request';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractModule extends AbstractPage {
  get moduleId() {
    return this.constructor.id || this.constructor.name;
  }

  get attrIds() {
    return this.constructor.attrIds || 'ids';
  }

  get confirmDeleteMsg() {
    return <FormattedMessage {...this.messages.confirmDeleteMsg} />;
  }

  get confirmToggleStateMsg() {
    return <FormattedMessage {...this.messages.confirmToggleStateMsg} />;
  }

  get confirmOpenTasksModuleMsg() {
    return <FormattedMessage {...this.messages.confirmOpenTasksModuleMsg} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderToolbar()}
        <Notification moduleId={this.moduleId} />
        <div className={classes.content}>
          {this.renderContent()}
        </div>
      </div>
    );
  }

  parseRequestIdentifiers(items) {
    return parseRequestItemsIDs(items, this.attrIds)
  }

  /* eslint no-param-reassign: ["error", { "props": false }] */
  request = (options) => {
    this.startWaiting();

    const skipNotify = options.skipNotify === true;
    const skipOpenTasksModule = options.skipOpenTasksModule === true;
    delete options.skipNotify;
    delete options.skipOpenTasksModule;

    return request(options).then((response) => {
      if (response.type === 'task' && !skipOpenTasksModule) this.onOpenTasksModule();
    }).catch((error) => {
      if (!skipNotify) this.notify(error);
      throw error;
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  onReload = () => {
    this.emitMessage('reload');
  }

  onAdd = () => {
    const moduleId = `${this.moduleId.split('/')[0]}/Add`;
    this.emitMessage('openModule', moduleId, 'MainTabs');
  }

  onEdit = (e, item) => {
    const moduleId = `${this.moduleId.split('/')[0]}/Edit`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }

  onBackToList = () => {
    const moduleId = this.moduleId.split('/')[0];
    this.emitMessage('openModule', moduleId, 'MainTabs');
  }

  onDelete = (e, items) => {
    const data = [this.confirmDeleteMsg, (value) => this.onConfirmedDelete(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedDelete = (value, items) => {
    if (!value) return;

    this.request({
      url: this.apiPath,
      method: 'DELETE',
      data: this.parseRequestIdentifiers(items),
    }).then((response) => {
      this.emitMessage('reload', response);
    });
  }

  onToggleState = (e, items) => {
    const data = [this.confirmToggleStateMsg, (value) => this.onConfirmedToggleState(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedToggleState = (value, items) => {
    if (!value) return;

    this.request({
      url: `${this.apiPath}/toggle`,
      method: 'POST',
      data: this.parseRequestIdentifiers(items),
    }).then((response) => {
      this.emitMessage('reload', response);
    });
  }

  onOpenTasksModule = () => {
    const data = [this.confirmOpenTasksModuleMsg, (value) => this.onConfirmedOpenTasksModule(value)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedOpenTasksModule = (value) => {
    if (value) this.emitMessage('openModule', 'Tasks', 'MainTabs');
  }
}
