/**
 *
 * Loading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './styles.jss';
import messages from './messages';
import session from '../../base/session';

import AbstractComponent from '../AbstractComponent';
import Alert from '../Alert';
import Notification from '../Notification';

class Loading extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    error: PropTypes.instanceOf(Object),
  }

  static defaultProps = { error: null }

  renderAlert(msg) {
    return (
      <Alert severity="error" style={{ marginTop: '1em' }}>
        {msg}
      </Alert>
    );
  }

  render() {
    const { classes, error, timedOut, pastDelay } = this.props;

    if (error || timedOut) {
      return <Notification moduleId={this.moduleId} className={session.iFrameDetected ? 'embedded' : 'unembedded'} />;
    }

    if (pastDelay) {
      return (
        <CircularProgress className={classes.circularProgress} size={90} thickness={1} color="secondary" />
      );
    }

    return null;
  }

  componentDidUpdate = () => {
    const { error, timedOut } = this.props;

    if (error) {
      this.notify(messages.error, 'error');
    } else if (timedOut) {
      this.notify(messages.timeout, 'error');
    }
  }
}

export default withStyles(styles)(Loading);
