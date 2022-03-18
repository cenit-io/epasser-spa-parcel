/**
 *
 * PaletteFormat
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
    row: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { classes, row } = this.props;

    return (
      <Avatar
        variant="square"
        sizes="large"
        alt={row.title}
        className={classes.screenshot}
        src={`/images/themes-screenshot/${row.id}.png`}
      />
    );
  }
}

export default withStyles(styles)(Format);
