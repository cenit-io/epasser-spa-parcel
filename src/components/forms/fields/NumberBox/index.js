/**
 *
 * NumberBox
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class IntegerBox extends AbstractField {
  renderField() {
    const { readOnly, multiline } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId}
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
        value={value || ''}
        type="number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(IntegerBox);
