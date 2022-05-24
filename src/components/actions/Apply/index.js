/**
 *
 * Apply
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';
import { ToggleIcon } from '../../Icons';

class Apply extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <ToggleIcon />

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Apply);
