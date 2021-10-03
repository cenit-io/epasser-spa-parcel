/**
 *
 * BoardLogistics
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import messages from './messages';
import styles from '../BoardModules/styles.jss';

import BoardModules from "../BoardModules";
import Orders from "../../containers/pages/logistics/Orders";
import Products from "../../containers/pages/logistics/Products";
import StockItems from "../../containers/pages/logistics/StockItems";

class BoardLogistics extends BoardModules {
  get title() {
    return messages.title;
  }

  get modules() {
    return [Orders, Products, StockItems]
  }
}

export default withStyles(styles)(BoardLogistics);
