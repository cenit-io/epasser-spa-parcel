/**
 *
 * AvailableIntegrations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { createStructuredSelector } from 'reselect';
import styles from '../../../../styles';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

import AvailableIntegrationsIcon from "@material-ui/icons/SettingsBluetooth";

export class AvailableIntegrations extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'AvailableIntegrations';
  static icon = AvailableIntegrationsIcon;
  static messages = messages;

  get fields() {
    return [
      { id: 'title' },
      { id: 'summary' },
      { id: 'version' },
      { id: 'status' },
      { id: 'updated_at' },
      { id: 'installed_at' },
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
)(withStyles(styles)(AvailableIntegrations));
