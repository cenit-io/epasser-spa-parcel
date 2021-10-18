/**
 *
 * AbstractModule
 *
 */

import React from 'react';
import AbstractPage from "../AbstractPage";
import Notification from "../Notification";

import { FormattedMessage } from "react-intl";
import { request } from "../../base/request";

/* eslint class-methods-use-this: ["off"] */
export default class AbstractModule extends AbstractPage {
  constructor(props) {
    super(props);
  }

  get moduleId() {
    return this.constructor.id || this.constructor.name;
  }

  get apiPath() {
    return this.constructor.apiPath
  }

  get attrIds() {
    return this.constructor.attrIds || 'ids';
  }

  get confirmDeleteMsg() {
    return <FormattedMessage {...this.messages.confirmDeleteMsg} />
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

  parseRequestDataForDelete(items) {
    const data = {};
    data[this.attrIds] = items.map(item => item.id);
    return data;
  }

  onReload = () => {
    this.emitMessage('reload');
  }

  onAdd = () => {
    const moduleId = `${this.moduleId.split('/')[0]}/Details`;
    this.emitMessage('openModule', moduleId, 'MainTabs');
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

    this.startWaiting();

    const options = {
      url: this.apiPath,
      method: 'DELETE',
      data: { data: this.parseRequestDataForDelete(items) }
    };

    request(options).then((response) => {
      this.emitMessage('reload', response);
    }).catch(error => {
      this.notify(error);
    }).finally(() => {
      this.releaseWaiting();
    });
  }
}
