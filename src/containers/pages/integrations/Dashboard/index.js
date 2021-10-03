/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import { DashboardIcon } from "../../../../components/Icons";

import styles from './styles.jss';
import messages from './messages';
import AbstractPage from '../../../../components/AbstractPage';
import makeSelectSignIn from '../../SignIn/selectors';

import BoardIntegrations from "../../../../components/BoardIntegrations";
import BoardLogistics from "../../../../components/BoardLogistics";
import BoardWorkflows from "../../../../components/BoardWorkflows";

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
      <div className={classes.root}>
        <BoardIntegrations />
        <BoardLogistics />
        <BoardWorkflows />
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
