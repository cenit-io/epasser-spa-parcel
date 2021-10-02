/**
 *
 * StockItems
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

import StockItemsIcon from "@material-ui/icons/Widgets";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

export class StockItems extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'StockItems';
  static icon = StockItemsIcon;
  static messages = messages;
  static apiPath = 'stock/items';

  get columns() {
    return [
      { id: 'product', format: this.productFormat },
      { id: 'sku', format: this.skuFormat },
      { id: 'integration', format: this._integrationFormat },
      { id: 'stock_location', format: this.stockLocationFormat },
      { id: 'count_on_hand', width: 170, align: 'right' },
      this.columnDateTime('updated_at'),
    ]
  }

  productFormat = (value, row, column) => row.product.name;
  skuFormat = (value, row, column) => row.product.variant.sku;
  stockLocationFormat = (value, row, column) => row.stock_location.name;
  _integrationFormat = (value, row, column) => this.integrationFormat(row.stock_location.integration, row, column);
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(StockItems));
