/**
 *
 * DateBox
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class DateBox extends AbstractField {
  renderField() {
    const { readOnly, required } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId} type="date"
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
        required={required}
        value={value || ''}
        error={!this.isValid()}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(DateBox);
