/**
 *
 * SwitchBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class SwitchBox extends AbstractField {
  static propTypes = {
    value: PropTypes.bool,
  }

  renderField() {
    const { readOnly } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId} type="checkbox"
        inputComponent={Switch}
        inputProps={{
          checked: value === true,
          onChange: this.onChange,
        }}
        label={this.label}
        readOnly={readOnly}
        disabled={readOnly}
      />
    );
  }

  onChange = (e) => this.setState({ value: e.target.checked });
}

export default withStyles(styles)(SwitchBox);
