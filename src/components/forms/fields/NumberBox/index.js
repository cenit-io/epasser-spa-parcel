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
    min: PropTypes.number,
    max: PropTypes.number,
  }

  static defaultProps = {
    value: null,
    min: null,
    max: null,
  }

  renderField() {
    const { readOnly, required, min, max } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId}
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
        required={required}
        value={value}
        error={!this.isValid()}
        type="number"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min, max }}
        onChange={this.onChange}
      />
    );
  }

  onChange = (e) => this.setState({ value: parseFloat(e.target.value) });
}

export default withStyles(styles)(NumberBox);
