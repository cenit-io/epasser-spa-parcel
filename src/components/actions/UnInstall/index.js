/**
 *
 * UnInstall
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { UnInstallIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class UnInstall extends AbstractWithSelectionAction {
  static messages = messages

  static multiSelection = false

  get color() {
    return this.disabled ? 'inherit' : 'error';
  }

  get icon() {
    return <UnInstallIcon color={this.color} />;
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].status === 'not_installed';
  }
}

export default withStyles(styles)(UnInstall);
