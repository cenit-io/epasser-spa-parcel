/**
 *
 * Tasks/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from '../../../../components/actions/Reload';
import DeleteAction from '../../../../components/actions/Delete';
import RetryAction from '../../../../components/actions/Retry';
import ShowAction from '../../../../components/actions/Show';
import columnDateTime from '../../../../components/columns/dateTime';

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
      {
        id: 'status', width: 120, format: this.statusFormat,
      },
      {
        id: 'progress', align: 'center', width: 100,
      },
      { id: 'description' },
      columnDateTime('created_at'),
      columnDateTime('updated_at'),
    ];
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <ShowAction moduleId={this.moduleId} onClick={this.onShow} />
        <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />
        <RetryAction moduleId={this.moduleId} onClick={this.onRetry} />
      </>
    );
  }

  statusFormat = (value) => <Typography sx={{ color: settings.color(value) }} variant="body2">{value}</Typography>

  onRetry = (e, items) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmRetryMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedRetry(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedRetry = (value, items) => {
    if (!value) return;

    this.request({
      url: `${this.apiPath}/retry`,
      method: 'PUT',
      data: { data: this.parseRequestIdentifiers(items) },
      skipOpenTasksModule: true,
    }).then(() => {
      this.notify({ message: 'successfulOperation', severity: 'success' });
      this.onReload();
    });
  }

  onShow = (e, item) => {
    const moduleId = `${this.moduleId.split('/')[0]}/Show`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }
}

export default withStyles(styles)(List);
