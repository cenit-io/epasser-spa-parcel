/**
 *
 * StockLocations
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

import StockLocationsIcon from "@material-ui/icons/LocalConvenienceStore";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

export class StockLocations extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'StockLocations';
  static icon = StockLocationsIcon;
  static messages = messages;
  static apiPath = 'stock/locations';

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
    ]
  }

  stockLocationFormat = (value, row, column) => row.stock_location.name;
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(StockLocations));
