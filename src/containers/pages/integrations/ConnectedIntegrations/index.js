/**
 *
 * ConnectedIntegrations
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
import AbstractPage from '../../AbstractPage';
import makeSelectSignIn from '../../SignIn/selectors';

import Typography from '@material-ui/core/Typography';
import ConnectedIntegrationsIcon from "@material-ui/icons/BluetoothConnected";

export class ConnectedIntegrations extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'ConnectedIntegrations';
  static title = messages.title;
  static icon = ConnectedIntegrationsIcon;

  render() {
    const { classes } = this.props;
    const { searchTerm } = this.state;

    return (
      <div>
        <Typography paragraph>
          <FormattedMessage {...messages.title} />
          TODO: ....
        </Typography>
      </div>
    );
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
