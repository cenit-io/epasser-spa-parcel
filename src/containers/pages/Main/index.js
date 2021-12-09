/**
 *
 * Main
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../styles';

import MainLayout from '../../MainLayout';
import MainTabs from '../../MainTabs';

class Main extends React.Component {
  render() {
    return (
      <MainLayout pageTitle="Welcome">
        <MainTabs />
      </MainLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(withStyles(styles)(Main));
