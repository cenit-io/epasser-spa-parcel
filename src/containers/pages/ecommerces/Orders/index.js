/**
 *
 * Orders/List
 *
 */

import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { OrdersIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import columnDateTime from '../../../../components/columns/dateTime';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
import OrderStatusFormat from '../../../../components/formats/OrderStatusFormat';

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
      columnDateTime('created_at'),
      columnDateTime('updated_at'),
    ];
  }
}

export default withStyles(styles)(List);
