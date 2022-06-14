/**
 *
 * AvailableIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';
import session from '../../../../base/session';

import AbstractPageList from '../../../../components/AbstractPageList';
import ActReload from '../../../../components/actions/Reload';
import ActInstall from '../../../../components/actions/Install';
import ActUnInstall from '../../../../components/actions/UnInstall';
import AvatarFormat from '../../../../components/formats/AvatarFormat';
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
      { id: 'icon', width: 40, label: ' ', format: AvatarFormat },
      { id: 'title' },
      { id: 'summary' },
      { id: 'version' },
      { id: 'status', format: this.checkTenantReady },
      columnDateTime('updated_at'),
      columnDateTime('installed_at'),
    ];
  }

  get actions() {
    return (
      <>
        <ActReload moduleId={this.moduleId} onClick={this.onReload} />
        <ActInstall moduleId={this.moduleId} onClick={this.onInstall} />
        <ActUnInstall moduleId={this.moduleId} onClick={this.onUnInstall} />
      </>
    );
  }

  checkTenantReady = (value, row) => {
    const { currentAccount: account } = session;

    if (!account.is_ready && row.name === 'edge_integration_core' && row.status !== 'not_installed') {
      session.set('account', { ...account, is_ready: true });
      this.emitMessage('changeAccountStatus', null, 'Global');
    }

    return value;
  }

  onInstall = (e, item) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmInstallMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedInstall(value, item)];
    this.emitMessage('confirm', data, 'main');
  }

  onUnInstall = (e, item) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmUnInstallMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedUnInstall(value, item)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedInstall = (value, item) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/${item.id}`,
      method: 'PATCH',
      successfulMessage: 'warningInstallTask',
    });
  }

  onConfirmedUnInstall = (value, item) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/${item.id}`,
      method: 'DELETE',
      successfulMessage: 'warningUnInstallTask',
    });
  }
}

export default withStyles(styles)(List);
