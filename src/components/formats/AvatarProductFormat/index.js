/**
 *
 * AvatarProductFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import Avatar from '@mui/material/Avatar';

import styles from './styles.jss';
import { ProductsIcon } from '../../Icons';

class Format extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const { classes, value: { 0: image } } = this.props;
    const defaultImage = image ? null : <ProductsIcon />;

    return (
      <Avatar src={image} variant="rounded" className={classes.largeAvatar}>
        {defaultImage}
      </Avatar>
    );
  }
}

export default withStyles(styles)(Format);
