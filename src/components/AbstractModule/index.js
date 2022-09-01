/**
 *
 * AbstractModule
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import { v4 as uuid } from 'uuid';

import session from '../../base/session';

import AbstractPage from '../AbstractPage';
import Notification from '../Notification';

import { parseRequestItemsIDs } from '../../base/request';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractModule extends AbstractPage {
  constructor(props) {
    super(props);
    this.setMessagingListener('delete', this.onDelete);
    this.setMessagingListener('toggle', this.onToggleState);
  }

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

  get confirmOpenTasksModuleMsg() {
    return <FormattedMessage {...this.messages.confirmOpenTasksModuleMsg} />;
  }

  render() {
    const { classes } = this.props;
    const toolbar = this.renderToolbar();

    return (
      <div className={classes.root}>
        {toolbar}
        <Notification moduleId={this.moduleId} className={session.iFrameDetected ? 'embedded' : 'unembedded'} />
        <div className={toolbar ? classes.content : classes.contentFullSize}>
          {this.renderContent()}
        </div>
      </div>
    );
  }

  parseRequestIdentifiers(items) {
    return parseRequestItemsIDs(items, this.attrIds);
  }

  onBackToList = () => {
    this.emitMessage('openModule', this.moduleBaseId, this.mainModuleId);
  }

  onDelete = (items) => {
    this.sendRequest({
      url: this.apiPath,
      method: 'DELETE',
      data: this.parseRequestIdentifiers(items),
    }).then((response) => {
      if (response.type === 'task') this.notify('successful_task_creation', 'warning');
      if (this.moduleId.match(/\//)) {
        this.onBackToList();
      } else {
        this.emitMessage('reload', response);
      }
    });
  }

  onToggleState = (items) => {
    this.sendRequest({
      url: `${this.apiPath}/toggle`,
      method: 'POST',
      data: this.parseRequestIdentifiers(items),
    }).then((response) => {
      this.emitMessage('reload', response);
    });
  }
}
