/**
 *
 * Waiting
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectReducer } from 'redux-injectors';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';
import styles from '../../styles';
import makeSelectWaiting from './selectors';
import reducer from './reducer';

class Waiting extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    waitingState: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { classes, waitingState: { enabled } } = this.props;

    return (
      <Backdrop className={classes.backdrop} open={enabled !== 0}>
        <CircularProgress size={90} thickness={1} color="inherit" />
      </Backdrop>
    );
  }
}

const mapStateToProps = createStructuredSelector({ waitingState: makeSelectWaiting() });
const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'waitingState', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(Waiting));
