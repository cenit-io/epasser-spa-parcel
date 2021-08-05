/**
 *
 * Main
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../styles';

import MainLayout from "../../MainLayout";
import MainTabs from "../../MainTabs";

class Main extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <MainLayout pageTitle="Welcome">
        <MainTabs />
      </MainLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(Main));
