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
import styles from '../../../../styles';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

import ConnectedIntegrationsIcon from "@material-ui/icons/BluetoothConnected";

export class ConnectedIntegrations extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'ConnectedIntegrations';
  static icon = ConnectedIntegrationsIcon;
  static messages = messages;
  static apiPath = 'integrations';

  get fields() {
    return [
      { id: 'icon', width: 40, label: '', format: this.iconFormat },
      { id: 'name' },
      { id: 'channel_title' },
      { id: 'authorized', padding: 'checkbox', format: this.boolFormat, align: 'center'  },
      { id: 'updated_at', width: 170, format: this.dateTimeFormat },
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
