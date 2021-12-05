/**
 *
 * Flows/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import settings from "./settings";
import styles from '../../../../components/AbstractPageList/styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";
import AddAction from "../../../../components/actions/Add";
import EditAction from "../../../../components/actions/Edit";
import StartAction from "../../../../components/actions/Start";
import { FormattedMessage } from "react-intl";

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
      { id: 'integration', format: this.integrationFormat },
      { id: 'scheduler', width: 100, align: 'center', format: this.schedulerFormat },
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <AddAction moduleId={this.moduleId} onClick={this.onAdd} />,
      <EditAction moduleId={this.moduleId} onClick={this.onEdit} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
      <StartAction moduleId={this.moduleId} onClick={this.onStart} />,
    ]
  }

  typeFormat = (value, row, column) => row.title;

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
      data: { data: this.parseRequestIdentifiers(items) }
    }).then((response) => {
      this.notify({ message: 'successfulStart', severity: 'success' });
    });
  }
}

export default withStyles(styles)(List);
