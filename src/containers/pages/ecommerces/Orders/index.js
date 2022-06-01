/**
 *
 * Orders/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import settings from './settings';
import styles from './styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import columnDateTime from '../../../../components/columns/dateTime';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
import OrderStatusFormat from '../../../../components/formats/OrderStatusFormat';
import ActReload from '../../../../components/actions/Reload';
import ActImport from '../../../../components/actions/Import';
import ActExport from '../../../../components/actions/Export';
import ActDocuments from '../../../../components/actions/Documents';

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
      { id: 'number' },
      { id: 'total_price', width: 150, align: 'right' },
      { id: 'total_quantity', width: 150, align: 'right' },
      { id: 'status', format: OrderStatusFormat, align: 'center' },
      { id: 'integration', format: IntegrationFormat },
      columnDateTime('last_import_date'),
      columnDateTime('created_date'),
      columnDateTime('updated_date'),
    ];
  }

  get actions() {
    return (
      <>
        <ActReload moduleId={this.moduleId} onClick={this.onReload} />
        <ActImport moduleId={this.moduleId} onClick={this.onImport} />
        <ActExport moduleId={this.moduleId} onClick={this.onExport} />
        <ActDocuments moduleId={this.moduleId} onClick={this.onShowDocuments} />
      </>
    );
  }

  onImport = (e, items) => {
    const msg = <FormattedMessage {...this.messages.confirmImportMsg} />;
    const data = [msg, (value) => this.onConfirmedImport(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedImport = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/import`,
      method: 'POST',
      data: this.parseRequestIdentifiers(items),
    }).then(() => {
      this.notify('successfulTaskCreation', 'warning');
    });
  }

  onExport = (e, items) => {
    const msg = <FormattedMessage {...this.messages.confirmExportMsg} />;
    const data = [msg, (value) => this.onConfirmedExport(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedExport = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/export`,
      method: 'PUT',
      data: this.parseRequestIdentifiers(items),
    }).then(() => {
      this.notify('successfulTaskCreation', 'warning');
    });
  }

  onShowDocuments = (e, item) => {
    const moduleId = `${this.moduleBaseId}/Docs`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }
}

export default withStyles(styles)(List);
