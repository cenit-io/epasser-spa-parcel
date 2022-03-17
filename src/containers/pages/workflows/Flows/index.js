/**
 *
 * Flows/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from '../../../../components/actions/Reload';
import DeleteAction from '../../../../components/actions/Delete';
import AddAction from '../../../../components/actions/Add';
import EditAction from '../../../../components/actions/Edit';
import StartAction from '../../../../components/actions/Start';
import ToggleAction from '../../../../components/actions/Toggle';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';

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
      { id: 'type', format: this.typeFormat },
      { id: 'integration', format: IntegrationFormat },
      {
        id: 'scheduler', width: 100, align: 'center', format: this.schedulerFormat,
      },
      this.columnDateTime('updated_at'),
    ];
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <AddAction moduleId={this.moduleId} onClick={this.onAdd} />
        <EditAction moduleId={this.moduleId} onClick={this.onEdit} />
        <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />
        <StartAction moduleId={this.moduleId} onClick={this.onStart} />
        <ToggleAction moduleId={this.moduleId} onClick={this.onToggleScheduler} label={this.toggleSchedulerLabel} />
      </>
    );
  }

  get toggleSchedulerLabel() {
    return <FormattedMessage {...this.messages.toggleScheduler} />;
  }

  typeFormat = (value, row) => row.title;

  /* eslint no-param-reassign: ["off"] */
  schedulerFormat = (value, row, column) => {
    value = row.task && row.task.scheduler && row.task.scheduler.active;
    return this.boolFormat(value, row, column);
  }

  onStart = (e, items) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmStartMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedStart(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedStart = (value, items) => {
    if (!value) return;

    this.request({
      url: `${this.apiPath}/start`,
      method: 'POST',
      data: { data: this.parseRequestIdentifiers(items) },
    }).then(() => {
      this.notify({ message: 'successfulStart', severity: 'success' });
    });
  }

  onToggleScheduler = (e, item) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmToggleSchedulerMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedToggleScheduler(value, item)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedToggleScheduler = (value, item) => {
    if (!value) return;

    this.request({
      url: `${this.apiPath}/${item.id}/toggle/scheduler/status`,
      method: 'POST',
    }).then(() => {
      this.notify({ message: 'successfulOperation', severity: 'success' });
      this.onReload();
    });
  }
}

export default withStyles(styles)(List);
