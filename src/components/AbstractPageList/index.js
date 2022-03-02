/**
 *
 * AbstractPageList
 *
 */

import React from 'react';
import moment from 'moment';

import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';

import Chip from '@mui/material/Chip';
import EnhancedTable from '../EnhancedTable';
import AbstractModule from '../AbstractModule';
import { request } from '../../base/request';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageList extends AbstractModule {
  constructor(props) {
    super(props);
    this.addMessagingListener('startLoadItems', this.onStartLoadItems);
  }

  get columns() {
    return [
      { id: 'id' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ];
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

  dateTimeFormat = (value, row, column) => moment(value).format('YYYY-MM-DD HH:MM:SS')

  avatarFormat = (value, row, column) => <Avatar src={value} className={this.props.classes.smallAvatar} />

  integrationFormat = (value, row, column) => {
    const { classes } = this.props;
    const integration = value;

    return (
      <Chip
        variant="outlined" color="primary" key={integration.id}
        avatar={<Avatar src={integration.icon} className={classes.smallAvatar} />}
        label={`${integration.name} of ${integration.channel_title}`}
      />
    );
  }

  renderContent() {
    return <EnhancedTable columns={this.columns} moduleId={this.moduleId} messages={this.messages} />;
  }

  onStartLoadItems = (limit, offset, term) => {
    this.lockActions();

    const options = {
      url: this.apiPath,
      method: 'GET',
      params: {
        limit, offset, term,
      },
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
