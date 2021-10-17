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
import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";

export class Products extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Products';
  static icon = ProductsIcon;
  static messages = messages;
  static apiPath = 'products';
  static attrIds = 'product_ids';

  get columns() {
    return [
      this.columnAvatar('images'),
      { id: 'name' },
      { id: 'price', width: 100, align: 'right' },
      { id: 'variants', width: 100, align: 'right' },
      { id: 'integrations', format: this.integrationsFormat },
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }

  avatarFormat = (value, row, column) => {
    const { classes } = this.props;
    const image = row.images[0];
    const defaultImage = image ? null : <ProductsIcon />;

    return (
      <Avatar src={image} variant="rounded" className={classes.largeAvatar}>
        {defaultImage}
      </Avatar>
    );
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
