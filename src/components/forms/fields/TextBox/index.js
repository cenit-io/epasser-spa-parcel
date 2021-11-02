/**
 *
 * TextBox
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';

import AbstractField from "../AbstractField";
import OutlinedInput from "@material-ui/core/OutlinedInput";

class TextBox extends AbstractField {
  renderField() {
    return <OutlinedInput id={this.componentId}
                          label={this.label}
                          value={this.state.value}
                          onChange={this.onChange} />
  }
}

export default withStyles(styles)(TextBox);