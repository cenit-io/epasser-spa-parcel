/**
 *
 * Reload
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/Refresh';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractAction from '../AbstractAction';

class Reload extends AbstractAction {
  static messages = messages

  static icon = <Icon />

  onClick = (e) => {
    this.emitMessage('reload');
  }
}

export default withStyles(styles)(Reload);
