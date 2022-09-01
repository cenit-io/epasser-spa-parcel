/**
 *
 * Toggle
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { ToggleIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Toggle extends AbstractWithSelectionAction {
  static icon = <ToggleIcon />

  get label() {
    const { selectionItems } = this.state;

    if (selectionItems.length === 0) return messages.enable;

    const hasEnabled = selectionItems.some((i) => i.active === true);
    const hasDisabled = selectionItems.some((i) => i.active === false);

    if (hasEnabled && hasDisabled) return messages.toggle;

    return hasEnabled ? messages.disable : messages.enable;
  }

  onClick = (e) => {
    const data = [this.confirmMsg, (value) => this.onConfirmedAction(value, this.state.selectionItems)];
    this.emitMessage('confirm', data, this.mainModuleId);
  }

  onConfirmedAction = (value, selection) => {
    if (value) {
      const { onConfirmedAction } = this.props;
      if (onConfirmedAction) {
        onConfirmedAction(selection);
      } else {
        this.emitMessage('toggle', [selection]);
      }
    }
  }
}

export default withStyles(styles)(Toggle);
