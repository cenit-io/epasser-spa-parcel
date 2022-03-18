/**
 *
 * BoolFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@mui/material/Checkbox';

export default class Format extends React.Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
  }

  render() {
    const { value } = this.props;

    return (
      <Checkbox checked={value} size="small" readOnly disableRipple />
    );
  }
}
