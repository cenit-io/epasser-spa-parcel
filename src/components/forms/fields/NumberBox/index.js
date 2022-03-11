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

class IntegerBox extends AbstractField {
  static propTypes = {
    value: PropTypes.number,
  }

  renderField() {
    const { readOnly } = this.props;
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
