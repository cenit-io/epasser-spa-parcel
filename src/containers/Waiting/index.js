/**
 *
 * Waiting
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';
import styles from './styles.jss';
import AbstractComponent from "../../components/AbstractComponent";

class Waiting extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state.enabled = 0;
    this.addMessagingListener('start', this.onStartWaiting, 'waiting');
    this.addMessagingListener('release', this.onReleaseWaiting, 'waiting');
  }

  render() {
    const { classes } = this.props;
    const { enabled } = this.state;

    return (
      <Backdrop className={classes.root} open={enabled !== 0}>
        <CircularProgress size={90} thickness={1} color="inherit" />
      </Backdrop>
    );
  }

  onStartWaiting = () => {
    this.setState({ enabled: Math.max(this.state.enabled + 1, 0) });
  }

  onReleaseWaiting = () => {
    this.setState({ enabled: Math.max(this.state.enabled - 1, 0) });
  }
}

export default withStyles(styles)(Waiting);
