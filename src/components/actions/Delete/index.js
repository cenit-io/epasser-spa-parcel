/**
 *
 * Delete
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/DeleteForever';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Delete extends AbstractWithSelectionAction {
  static messages = messages

  get color() {
    return this.disabled ? 'inherit' : 'error';
  }

  get icon() {
    return <Icon color={this.color} />;
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
        this.emitMessage('delete', [selection]);
      }
    }
  }
}

export default withStyles(styles)(Delete);
