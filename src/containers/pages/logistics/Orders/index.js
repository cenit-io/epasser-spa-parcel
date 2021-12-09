/**
 *
 * Orders/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { OrdersIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';

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
      { id: 'integration', format: this.integrationFormat },
      this.columnDateTime('created_date'),
      this.columnDateTime('updated_date'),
    ];
  }

  avatarFormat = (value, row) => {
    const { classes } = this.props;

    return <Avatar src={row.integration.icon} variant="rounded" className={classes.smallAvatar} />;
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
