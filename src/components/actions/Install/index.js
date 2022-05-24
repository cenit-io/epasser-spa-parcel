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

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].status === 'installed';
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Install);
