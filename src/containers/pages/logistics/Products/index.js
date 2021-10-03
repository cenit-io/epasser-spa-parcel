/**
 *
 * Products
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { ProductsIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

import Avatar from "@material-ui/core/Avatar";

export class Products extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Products';
  static icon = ProductsIcon;
  static messages = messages;
  static apiPath = 'products';

  get columns() {
    return [
      this.columnAvatar('images'),
      { id: 'name' },
      { id: 'price', width: 100, align: 'right' },
      { id: 'variants', width: 100, align: 'right' },
      { id: 'integrations', format: this.integrationsFormat },
    ]
  }

  avatarFormat = (value, row, column) => {
    const { classes } = this.props;

    return <Avatar src={row.images[0]} variant="rounded" className={classes.largeAvatar} />;
  }

  integrationsFormat = (value, row, column) => {
    return value.map((integration, idx) => this.integrationFormat(integration, row, column))
  }
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(Products));
