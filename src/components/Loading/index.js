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

class Loading extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    error: PropTypes.instanceOf(Object),
  }

  static defaultProps = { error: null }

  render() {
    const { classes, error } = this.props;

    /* eslint-disable no-console */
    if (error) console.error(error);
    /* eslint-enable no-console */

    return (
      <CircularProgress className={classes.circularProgress} size={90} thickness={1} color="secondary" />
    );
  }
}

export default withStyles(styles)(Loading);
