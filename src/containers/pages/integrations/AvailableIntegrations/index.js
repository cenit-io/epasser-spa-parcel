/**
 *
 * AvailableIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { AvailableIntegrationsIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from '../../../../components/actions/Reload';
import InstallAction from '../../../../components/actions/Install';
import UnInstallAction from '../../../../components/actions/UnInstall';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'AvailableIntegrations';

  static icon = AvailableIntegrationsIcon;

  static messages = messages;

  static apiPath = 'available/integrations';

  static attrIds = 'collection_ids';

  get columns() {
    return [
      { id: 'title' },
      { id: 'summary' },
      { id: 'version' },
      { id: 'status' },
      { id: 'updated_at' },
      { id: 'installed_at' },
    ];
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <InstallAction moduleId={this.moduleId} onClick={this.onInstall} />
        <UnInstallAction moduleId={this.moduleId} onClick={this.onUnInstall} />
      </>
    );
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

    this.request({
      url: `${this.apiPath}/${item.id}`,
      method: 'PATCH',
    }).then(() => {
      this.notify({ message: 'successfulInstallTask', severity: 'success' });
    });
  }

  onConfirmedUnInstall = (value, item) => {
    if (!value) return;

    this.request({
      url: `${this.apiPath}/${item.id}`,
      method: 'DELETE',
    }).then(() => {
      this.notify({ message: 'successfulUnInstallTask', severity: 'success' });
    });
  }
}

export default withStyles(styles)(List);
