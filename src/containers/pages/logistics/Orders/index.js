/**
 *
 * Orders
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

import OrdersIcon from "@material-ui/icons/ShoppingCart";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export class Orders extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Orders';
  static icon = OrdersIcon;
  static messages = messages;
  static apiPath = 'orders';

  get columns() {
    return [
      { id: 'number' },
      { id: 'total_price', width: 155, align: 'right' },
      { id: 'total_quantity', width: 155, align: 'right' },
      { id: 'status', format: this.statusFormat, align: 'center' },
      { id: 'integration', format: this.integrationFormat },
      this.columnDateTime('created_date'),
      this.columnDateTime('updated_date'),
    ]
  }

  avatarFormat = (value, row, column) => {
    const { classes } = this.props;

    return <Avatar src={row.integration.icon} variant="rounded" className={classes.smallAvatar} />;
  }

  statusFormat = (value, row, column) => {
    let color = 'inherit';

    if (/pending|confirmed/i.test(value)) {
      color = 'secondary';
    } else if (/cancel/i.test(value)) {
      color = 'error';
    } else if (/completed|paid/i.test(value)) {
      color = 'primary';
    }

    return <Typography color={color} variant="body2">{value}</Typography>
  }
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(Orders));
