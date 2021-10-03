/**
 *
 * AvailableIntegrations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { AvailableIntegrationsIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

export class AvailableIntegrations extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'AvailableIntegrations';
  static icon = AvailableIntegrationsIcon;
  static messages = messages;
  static apiPath = 'available/integrations';

  get columns() {
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
