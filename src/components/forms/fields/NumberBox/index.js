/**
 *
 * NumberBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class NumberBox extends AbstractField {
  static propTypes = {
    value: PropTypes.number,
  }

  renderField() {
    const { readOnly, required } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId}
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
        required={required}
        value={value || ''}
        error={!this.isValid()}
        type="number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(NumberBox);
