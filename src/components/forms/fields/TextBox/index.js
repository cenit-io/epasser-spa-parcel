/**
 *
 * TextBox
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';
import PropTypes from "prop-types";

class TextBox extends AbstractField {
  static propTypes = {
    multiline: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    multiline: false,
  };

  renderField() {
    const { readOnly, multiline } = this.props;
    const { value } = this.state;

    return (
      <OutlinedInput
        id={this.componentId}
        label={this.label}
        multiline={multiline}
        readOnly={readOnly}
        disabled={readOnly}
        value={value || ''}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(TextBox);
