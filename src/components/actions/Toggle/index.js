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

  get disabled() {
    let { disabled } = this.props;
    const { locked, selectionItems } = this.state;

    if (typeof disabled === 'function') disabled = disabled(selectionItems);

    return locked || selectionItems.length === 0 || disabled;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems);
  }
}

export default withStyles(styles)(Toggle);
