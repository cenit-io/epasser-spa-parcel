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

  static multiSelection = false
}

export default withStyles(styles)(Edit);
