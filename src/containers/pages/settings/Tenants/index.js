/**
 *
 * Tenants/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';

import session from '../../../../base/session';
import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import ActReload from '../../../../components/actions/Reload';
import ActAdd from '../../../../components/actions/Add';
import ActEdit from '../../../../components/actions/Edit';
import ActDelete from '../../../../components/actions/Delete';
import ActSwitch from '../../../../components/actions/Switch';
import columnDateTime from '../../../../components/columns/dateTime';
import BoolFormat from '../../../../components/formats/BoolFormat';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  static apiPath = settings.apiPath;

  static multiSelect = false;

  get baseParams() {
    return {
      with_details: true,
    };
  }

  get columns() {
    return [
      { id: 'name', width: 200, format: this.nameFormat },
      { id: 'user', format: this.userFormat },
      { id: 'status', width: 150, format: this.statusFormat },
      columnDateTime('created_at'),
      columnDateTime('updated_at'),
    ];
  }

  get actions() {
    const { moduleId } = this;

    return (
      <>
        <ActReload moduleId={moduleId} />
        <ActAdd moduleId={moduleId} />
        <ActDelete
          multiSelection={false}
          moduleId={moduleId}
          disabled={this.isCurrentAccount}
        />
        <ActSwitch moduleId={moduleId} onClick={this.onSwitch} disabled={this.isCurrentAccount} />
      </>
    );
  }

  get confirmSwitchMsg() {
    return <FormattedMessage {...this.messages.confirmSwitchMsg} />;
  }

  isCurrentAccount = (item) => {
    const { id: accountId } = session.currentAccount;
    return item.id === accountId;
  }

  nameFormat = (value, row) => {
    if (row.id !== session.currentAccount.id) return value;

    return <Typography variant="subtitle2" color="secondary">{value}</Typography>;
  }

  userFormat = (value) => value.name || value.email;

  statusFormat = (value, row) => (this.messages[value] ? <FormattedMessage {...this.messages[value]} /> : value)

  onSwitch = (e, item) => {
    const data = [this.confirmSwitchMsg, (value) => this.onConfirmedSwitch(value, item)];
    this.emitMessage('confirm', data, this.mainModuleId);
  }

  onConfirmedSwitch = (value, item) => {
    if (!value) return;

    this.emitMessage('closeModules', { except: [this.moduleId] }, this.mainModuleId);
    this.emitMessage('setSessionAccount', item, this.mainModuleId);
  }

  onDelete = (item) => {
    this.sendRequest({
      url: `${this.apiPath}/${item.id}`,
      method: 'DELETE',
    }).then(() => {
      this.emitMessage('reload');
    });
  }
}

export default withStyles(styles)(List);
