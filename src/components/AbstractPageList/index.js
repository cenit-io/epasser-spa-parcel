/**
 *
 * AbstractPageList
 *
 */

import React from 'react';
import moment from 'moment';
import AbstractModule from "../AbstractModule";
import EnhancedTable from "../EnhancedTable";

import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

import Chip from "@material-ui/core/Chip";
import { request } from "../../base/request";

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageList extends AbstractModule {
  constructor(props) {
    super(props);
    this.addMessagingListener('loadItems', this.onLoadItems);
  }

  get columns() {
    return [
      { id: 'id' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  columnAvatar(id) {
    return { id: id || 'icon', width: 40, label: '', format: this.avatarFormat }
  }

  columnDateTime(id) {
    return { id: id || 'created_at', width: 175, format: this.dateTimeFormat }
  }

  boolFormat = (value, row, column) => {
    return <Checkbox checked={value} size="small" readOnly disableRipple />
  }

  dateTimeFormat = (value, row, column) => {
    return moment(value).format('YYYY-MM-DD HH:MM:SS');
  }

  avatarFormat = (value, row, column) => {
    return <Avatar src={value} className={this.props.classes.smallAvatar} />;
  }

  integrationFormat = (value, row, column) => {
    const { classes } = this.props;
    const integration = value;

    return (
      <Chip variant="outlined" color="primary" key={integration.id}
            avatar={<Avatar src={integration.icon} className={classes.smallAvatar} />}
            label={`${integration.name} of ${integration.channel_title}`} />
    );
  }

  renderContent() {
    return <EnhancedTable columns={this.columns} moduleId={this.moduleId} messages={this.messages} />
  }

  onLoadItems = (limit, offset, term) => {
    this.lockActions();

    const options = {
      url: this.apiPath,
      method: 'GET',
      params: { limit, offset, term }
    };

    request(options).then((response) => {
      this.emitMessage('successfulLoadItems', response);
    }).catch(error => {
      this.emitMessage('failedLoadItems', error);
    }).finally(() => {
      this.unlockActions();
    });
  }
}
