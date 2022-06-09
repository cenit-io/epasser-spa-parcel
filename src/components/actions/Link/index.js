/**
 *
 * Link
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/AddLink';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />
}

export default withStyles(styles)(Action);
