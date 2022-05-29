/**
 *
 * StockLocations/List
 *
 */

import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { StockLocationsIcon } from '../../../../components/Icons';

import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
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
      { id: 'name' },
      { id: 'integration', format: IntegrationFormat },
      { id: 'country' },
      { id: 'state' },
      { id: 'city' },
      { id: 'zip_code' },
      { id: 'phone' },
      columnDateTime('updated_at'),
    ];
  }

  stockLocationFormat = (value, row) => row.stock_location.name;
}

export default withStyles(styles)(List);
