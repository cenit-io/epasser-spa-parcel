/**
 *
 * AbstractPageList
 *
 */

import React from 'react';

import { deepmerge } from '@mui/utils';

import EnhancedTable from '../EnhancedTable';
import AbstractModule from '../AbstractModule';
import columnDateTime from '../columns/dateTime';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageList extends AbstractModule {
  constructor(props) {
    super(props);
    this.setMessagingListener('startLoadItems', this.onStartLoadItems);
  }

  get columns() {
    return [
      { id: 'id' },
      columnDateTime('created_at'),
      columnDateTime('updated_at'),
    ];
  }

  get multiSelect() {
    return this.constructor.multiSelect !== false;
  }

  get baseParams() {
    return {};
  }

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
      skipOpenTasksModule: true,
      url: this.apiPath,
      method: 'GET',
      params,
    };

    this.sendRequest(options).then((response) => {
      this.emitMessage('loadItemsSuccessful', response);
    }).catch((error) => {
      this.emitMessage('loadItemsFailed', error);
    }).finally(() => {
      this.unlockActions();
    });
  }
}
