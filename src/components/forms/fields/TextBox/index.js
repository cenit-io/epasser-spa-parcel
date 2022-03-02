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
  }

  static defaultProps = {
    multiline: false,
    style: null,
    rows: null,
    maxRows: null,
  };

  renderField() {
    const { value } = this.state;
    const {
      readOnly, multiline, style, rows, maxRows,
    } = this.props;

    return (
      <OutlinedInput
        id={this.componentId}
        label={this.label}
        multiline={multiline}
        readOnly={readOnly}
        disabled={readOnly}
        value={value || ''}
        style={style}
        rows={rows}
        maxRows={maxRows}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(TextBox);
