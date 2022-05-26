/**
 *
 * Export
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/MoveUp';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Export extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />
}

export default withStyles(styles)(Export);
