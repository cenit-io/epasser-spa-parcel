/**
 *
 * TimeAppointedBox
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';

import AbstractField from "../AbstractField";
import OutlinedInput from "@material-ui/core/OutlinedInput";

class TimeAppointedBox extends AbstractField {
  renderField() {
    const { readOnly } = this.props;
    const { value } = this.state;

    return <OutlinedInput id={this.componentId} type="time"
                          label={this.label}
                          readOnly={readOnly}
                          disabled={readOnly}
                          value={value || '00:00'}
                          onChange={this.onChange} />
  }
}

export default withStyles(styles)(TimeAppointedBox);