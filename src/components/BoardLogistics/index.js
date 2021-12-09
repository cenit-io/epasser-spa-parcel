/**
 *
 * BoardLogistics
 *
 */

import { withStyles } from '@material-ui/core/styles';

import messages from './messages';
import styles from '../BoardModules/styles.jss';

import BoardModules from '../BoardModules';
import Orders from '../../containers/pages/logistics/Orders';
import Products from '../../containers/pages/logistics/Products';
import StockItems from '../../containers/pages/logistics/StockItems';
import StockLocations from '../../containers/pages/logistics/StockLocations';

class BoardLogistics extends BoardModules {
  get title() {
    return messages.title;
  }

  get modules() {
    return [Orders, Products, StockLocations, StockItems];
  }
}

export default withStyles(styles)(BoardLogistics);
