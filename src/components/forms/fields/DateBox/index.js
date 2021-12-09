/**
 *
 * DateBox
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class DateBox extends AbstractField {
  renderField() {
    const { readOnly } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId} type="date"
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
        value={value || ''}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(DateBox);
