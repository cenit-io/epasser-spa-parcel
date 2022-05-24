/**
 *
 * Show
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { ShowIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <ShowIcon />

  static multiSelection = false
}

export default withStyles(styles)(Action);
