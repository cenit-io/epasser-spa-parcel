/**
 *
 * NumberBox
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import styles from './styles.jss';

import AbstractField from '../AbstractField';
import PropTypes from "prop-types";

class IntegerBox extends AbstractField {
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
        type='number'
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        onChange={this.onChange}
      />
    );
  }
}

export default withStyles(styles)(IntegerBox);
