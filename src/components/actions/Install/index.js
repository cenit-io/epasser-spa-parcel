/**
 *
 * Install
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { InstallIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Install extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <InstallIcon />

  static multiSelection = false

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].status === 'installed';
  }
}

export default withStyles(styles)(Install);
