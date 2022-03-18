/**
 *
 * AvatarFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import Avatar from '@mui/material/Avatar';

import styles from './styles.jss';

class Format extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.string.isRequired,
  }

  render() {
    const { classes, value } = this.props;

    return <Avatar src={value} className={classes.smallAvatar} />;
  }
}

export default withStyles(styles)(Format);
