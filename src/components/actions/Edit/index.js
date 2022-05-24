/**
 *
 * Edit
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/Edit';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Edit extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />

  get disabled() {
    let { disabled } = this.props;
    const { locked, selectionItems } = this.state;

    if (typeof disabled === 'function') disabled = disabled(selectionItems);

    return locked || selectionItems.length !== 1 || disabled;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Edit);
