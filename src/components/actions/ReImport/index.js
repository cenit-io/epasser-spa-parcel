/**
 *
 * Delete
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/MoveDown';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Delete extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />
}

export default withStyles(styles)(Delete);
