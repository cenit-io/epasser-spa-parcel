/**
 *
 * ConnectedIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";
import { request } from "../../../../base/request";

import styles from '../../../../components/AbstractPageList/styles.jss';
import settings from "./settings";

import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from "../../../../components/actions/Reload";
import AddAction from "../../../../components/actions/Add";
import EditAction from "../../../../components/actions/Edit";
import DeleteAction from "../../../../components/actions/Delete";
import AuthorizeAction from "../../../../components/actions/Authorize";
import UnAuthorizeAction from "../../../../components/actions/UnAuthorize";

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;
  static icon = settings.icon;
  static messages = settings.messages;
  static apiPath = settings.apiPath;
  static attrIds = settings.attrIds;

  get columns() {
    return [
      this.columnAvatar(),
      { id: 'name' },
      { id: 'channel_title' },
      { id: 'authorized', width: 100, align: 'center', format: this.boolFormat },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <AddAction moduleId={this.moduleId} onClick={this.onAdd} />,
      <EditAction moduleId={this.moduleId} onClick={this.onEdit} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} disabled={this.canNotDelete} />,
      <AuthorizeAction moduleId={this.moduleId} onClick={this.onAuthorize} />,
      <UnAuthorizeAction moduleId={this.moduleId} onClick={this.onUnAuthorize} />,
    ]
  }

  canNotDelete = (items) => {
    return items.find(item => item.authorized) !== undefined
  }

  onAuthorize = (e, item) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmAuthorizeMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedAuthorize(value, item)];
    this.emitMessage('confirm', data, 'main');
  }

  onUnAuthorize = (e, items) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmUnAuthorizeMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedUnAuthorize(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedAuthorize = (value, item) => {
    if (!value) return;
    alert('TODO: ...')
  }

  onConfirmedUnAuthorize = (value, items) => {
    if (!value) return;
    alert('TODO: ...')
  }
}

export default withStyles(styles)(List);
