/**
 *
 * Authorize
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';
import { AuthorizeIcon } from '../../Icons';

class Authorize extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <AuthorizeIcon />

  static multiSelection = false

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].authorized;
  }
}

export default withStyles(styles)(Authorize);
