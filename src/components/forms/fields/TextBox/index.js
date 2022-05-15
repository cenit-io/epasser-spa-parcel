/**
 *
 * TextBox
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import styles from './styles.jss';

import AbstractField from '../AbstractField';

class TextBox extends AbstractField {
  static propTypes = {
    multiline: PropTypes.bool.isRequired,
    style: PropTypes.instanceOf(Object),
    rows: PropTypes.number,
    maxRows: PropTypes.number,
    type: PropTypes.string,
    pattern: PropTypes.instanceOf(RegExp),
  }

  static defaultProps = {
    multiline: false,
    style: null,
    rows: null,
    maxRows: null,
    pattern: /.*/,
    type: 'text',
  };

  isValid = () => {
    const { required, pattern } = this.props;

    return !((required && this.isBlack()) || !pattern.test(this.state.value));
  }

  renderField() {
    const { value } = this.state;
    const {
      readOnly, multiline, style, rows, maxRows, required, type,
    } = this.props;

    return (
      <OutlinedInput
        id={this.componentId}
        label={this.label}
        multiline={multiline}
        readOnly={readOnly}
        disabled={readOnly}
        required={required}
        value={value || ''}
        type={type}
        error={!this.isValid()}
        style={style}
        rows={rows}
        maxRows={maxRows}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(TextBox);
