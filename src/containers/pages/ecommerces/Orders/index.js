/**
 *
 * Orders/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { OrdersIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import columnDateTime from '../../../../components/columns/dateTime';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
import OrderStatusFormat from '../../../../components/formats/OrderStatusFormat';
import ReloadAction from '../../../../components/actions/Reload';
import ReImportAction from '../../../../components/actions/ReImport';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Orders';

  static icon = OrdersIcon;

  static messages = messages;

  static apiPath = 'orders';

  static attrIds = 'order_ids';

  get columns() {
    return [
      { id: 'number' },
      { id: 'total_price', width: 155, align: 'right' },
      { id: 'total_quantity', width: 155, align: 'right' },
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
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <ReImportAction moduleId={this.moduleId} onClick={this.onReImport} />
      </>
    );
  }

  onReImport = (e, items) => {
    const confirmReImportMsg = <FormattedMessage {...messages.confirmReImportMsg} />;
    const data = [confirmReImportMsg, (value) => this.onConfirmedReImport(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedReImport = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: this.apiPath,
      method: 'POST',
      data: this.parseRequestIdentifiers(items),
    }).then(() => {
      this.notify({ message: 'successfulOperation', severity: 'success' });
    });
  }
}

export default withStyles(styles)(List);
