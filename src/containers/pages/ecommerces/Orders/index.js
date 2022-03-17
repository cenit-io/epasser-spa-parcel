/**
 *
 * Orders/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { OrdersIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';

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
      {
        id: 'total_price', width: 155, align: 'right',
      },
      {
        id: 'total_quantity', width: 155, align: 'right',
      },
      {
        id: 'status', format: this.statusFormat, align: 'center',
      },
      { id: 'integration', format: IntegrationFormat },
      this.columnDateTime('created_date'),
      this.columnDateTime('updated_date'),
    ];
  }

  statusFormat = (value) => {
    let color = 'inherit';

    if (/pending|confirmed/i.test(value)) {
      color = 'secondary';
    } else if (/cancel/i.test(value)) {
      color = 'error';
    } else if (/completed|paid/i.test(value)) {
      color = 'primary';
    }

    return <Typography color={color} variant="body2">{value}</Typography>;
  }
}

export default withStyles(styles)(List);
