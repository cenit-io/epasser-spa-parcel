/**
 *
 * Dashboard
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
import AbstractPage from '../../../../components/AbstractPage';
import makeSelectSignIn from '../../SignIn/selectors';

import Typography from '@material-ui/core/Typography';
import DashboardIcon from "@material-ui/icons/Dashboard";

export class Dashboard extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Dashboard';
  static icon = DashboardIcon;
  static messages = messages;

  render() {
    const { classes } = this.props;
    const { searchTerm } = this.state;

    return (
      <div>
        <Typography paragraph>
          <FormattedMessage {...messages.title} />
          TODO: ....
          {searchTerm}
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
)(withStyles(styles)(Dashboard));
