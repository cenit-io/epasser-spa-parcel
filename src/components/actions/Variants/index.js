/**
 *
 * Variants
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { VariantsIcon as Icon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />

  static multiSelection = false
}

export default withStyles(styles)(Action);
