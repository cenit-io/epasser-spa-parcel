/**
 *
 * TimeCyclicBox
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';

import AbstractField from "../AbstractField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

class TimeCyclicBox extends AbstractField {
  static getFrequency(value) {
    if (value.match(/^\d+m$/)) return 'minutes';
    if (value.match(/^\d+h$/)) return 'hours';
    if (value.match(/^\d+d$/)) return 'days';
    if (value.match(/^\d+w$/)) return 'weeks';
    if (value.match(/^\d+M$/)) return 'months';

    return 'hours';
  }

  renderField() {
    const { readOnly, frequency } = this.props;
    const { value } = this.state;

    return <OutlinedInput id={this.componentId} type="number"
                          label={this.label}
                          readOnly={readOnly}
                          disabled={readOnly}
                          value={parseInt(value || '1')}
                          endAdornment={
                            <InputAdornment position="end">{frequency}</InputAdornment>
                          }
                          onChange={this.onChange} />
  }

  transValue = (value) => {
    const { frequency = TimeCyclicBox.getFrequency(this.props.value) } = this.props;
    return `${parseInt(value || 0)}${frequency === 'months' ? 'M' : frequency[0]}`
  }
}

export default withStyles(styles)(TimeCyclicBox);