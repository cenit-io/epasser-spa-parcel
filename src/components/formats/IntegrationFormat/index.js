/**
 *
 * IntegrationFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import styles from './styles.jss';

class Format extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { classes, value: integration } = this.props;

    return (
      <Chip
        variant="outlined"
        color="primary"
        avatar={<Avatar src={integration.icon} className={classes.smallAvatar} />}
        label={`${integration.name} of ${integration.channel_title}`}
      />
    );
  }
}

export default withStyles(styles)(Format);
