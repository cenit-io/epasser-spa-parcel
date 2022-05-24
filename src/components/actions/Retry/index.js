/**
 *
 * Retry
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { RetryIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Retry extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <RetryIcon />

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    const hasNoFailedTasks = (items.find((item) => item.status !== 'failed')) !== undefined;
    return locked || items.length === 0 || hasNoFailedTasks;
  }
}

export default withStyles(styles)(Retry);
