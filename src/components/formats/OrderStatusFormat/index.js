/**
 *
 * OrderStatusFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

export default class Format extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    const { value } = this.props;

    let color = 'inherit';

    if (/pending|confirmed/i.test(value)) {
      color = 'secondary';
    } else if (/cancel/i.test(value)) {
      color = 'error';
    } else if (/completed|paid/i.test(value)) {
      color = 'primary';
    }

    return <Typography color={color} variant="body2">{value}</Typography>;
  }
}
