/**
 *
 * AbstractModule
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import { v4 as uuid } from 'uuid';

import AbstractPage from '../AbstractPage';
import Notification from '../Notification';

import { parseRequestItemsIDs } from '../../base/request';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractModule extends AbstractPage {
  get moduleId() {
    if (this._moduleId) return this._moduleId;
    this._moduleId = this.constructor.id || uuid();
    return this._moduleId;
  }

  get moduleBaseId() {
    return this.moduleId.split('/')[0];
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
    return parseRequestItemsIDs(items, this.attrIds);
  }

  onReload = () => {
    this.emitMessage('reload');
  }

  onAdd = () => {
    const moduleId = `${this.moduleBaseId}/Add`;
    this.emitMessage('openModule', moduleId, 'MainTabs');
  }

  onEdit = (e, item) => {
    const moduleId = `${this.moduleBaseId}/Edit`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }

  onBackToList = () => {
    this.emitMessage('openModule', this.moduleBaseId, 'MainTabs');
  }

  onDelete = (e, items) => {
    const data = [this.confirmDeleteMsg, (value) => this.onConfirmedDelete(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedDelete = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: this.apiPath,
      method: 'DELETE',
      data: this.parseRequestIdentifiers(items),
    }).then((response) => {
      if (response.type === 'task') this.notify('successfulTaskCreation', 'warning');
      if (this.moduleId.match(/\//)) {
        this.onBackToList();
      } else {
        this.emitMessage('reload', response);
      }
    });
  }

  onToggleState = (e, items) => {
    const data = [this.confirmToggleStateMsg, (value) => this.onConfirmedToggleState(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedToggleState = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/toggle`,
      method: 'POST',
      data: this.parseRequestIdentifiers(items),
    }).then((response) => {
      this.emitMessage('reload', response);
    });
  }
}
