/**
 *
 * BoolFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

import color from './color';

export default class Format extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    const { value } = this.props;

    return (
      <Typography sx={{ color: color(value) }} variant="body2">{value}</Typography>
    );
  }
}
