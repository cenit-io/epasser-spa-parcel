/**
 *
 * Switch
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { SwitchTenantIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <SwitchTenantIcon />

  static multiSelection = false
}

export default withStyles(styles)(Action);
