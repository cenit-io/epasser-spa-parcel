/**
 *
 * StockLocations/List
 *
 */

import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { StockLocationsIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'StockLocations';

  static icon = StockLocationsIcon;

  static messages = messages;

  static apiPath = 'stock/locations';

  static attrIds = 'stock_location_ids';

  get columns() {
    return [
      { id: 'name' },
      { id: 'integration', format: this.integrationFormat },
      { id: 'country' },
      { id: 'state' },
      { id: 'city' },
      { id: 'zip_code' },
      { id: 'phone' },
      this.columnDateTime('updated_at'),
    ];
  }

  stockLocationFormat = (value, row) => row.stock_location.name;
}

export default withStyles(styles)(List);