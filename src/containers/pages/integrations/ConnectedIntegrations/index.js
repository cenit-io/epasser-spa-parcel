/**
 *
 * ConnectedIntegrations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { ConnectedIntegrationsIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";

export class ConnectedIntegrations extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'ConnectedIntegrations';
  static icon = ConnectedIntegrationsIcon;
  static messages = messages;
  static apiPath = 'integrations';

  get columns() {
    return [
      this.columnAvatar(),
      { id: 'name' },
      { id: 'channel_title' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(ConnectedIntegrations));
