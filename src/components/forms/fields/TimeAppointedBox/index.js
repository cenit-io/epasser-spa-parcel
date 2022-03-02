/**
 *
 * TimeAppointedBox
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class TimeAppointedBox extends AbstractField {
  renderField() {
    const { readOnly } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId} type="time"
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
        value={value || '00:00'}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(TimeAppointedBox);
