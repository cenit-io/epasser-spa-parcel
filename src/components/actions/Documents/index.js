/**
 *
 * Documents
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/Assignment';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Documents extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />

  static multiSelection = false
}

export default withStyles(styles)(Documents);
