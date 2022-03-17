/**
 *
 * AbstractPageList
 *
 */

import React from 'react';
import moment from 'moment';

import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';

import { deepmerge } from '@mui/utils';
import { request } from '../../base/request';

import EnhancedTable from '../EnhancedTable';
import AbstractModule from '../AbstractModule';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageList extends AbstractModule {
  constructor(props) {
    super(props);
    this.setMessagingListener('startLoadItems', this.onStartLoadItems);
  }

  get columns() {
    return [
      { id: 'id' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ];
  }

  get multiSelect() {
    return this.constructor.multiSelect !== false;
  }

  get baseParams() {
    return {};
  }

  columnAvatar(id) {
    return {
      id: id || 'icon', width: 40, label: '', format: this.avatarFormat,
    };
  }

  columnDateTime(id) {
    return {
      id: id || 'created_at', width: 175, format: this.dateTimeFormat,
    };
  }

  boolFormat = (value, row, column) => <Checkbox checked={value} size="small" readOnly disableRipple />

  dateTimeFormat = (value, row, column) => moment(value).format('YYYY-MM-DD hh:mm:ss')

  avatarFormat = (value, row, column) => <Avatar src={value} className={this.props.classes.smallAvatar} />

  renderContent() {
    return (
      <EnhancedTable
        columns={this.columns}
        moduleId={this.moduleId}
        messages={this.messages}
        multiSelect={this.multiSelect}
        limit={this.limit}
      />
    );
  }

  onStartLoadItems = (limit, offset, term) => {
    this.lockActions();

    const params = deepmerge(this.baseParams, { limit, offset, term });
    const options = {
      url: this.apiPath,
      method: 'GET',
      params,
    };

    request(options).then((response) => {
      this.emitMessage('loadItemsSuccessful', response);
    }).catch((error) => {
      this.emitMessage('loadItemsFailed', error);
    }).finally(() => {
      this.unlockActions();
    });
  }
}
