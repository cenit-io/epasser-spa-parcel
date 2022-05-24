/**
 *
 * Flows
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FlowsIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Flows extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <FlowsIcon />

  static multiSelection = false
}

export default withStyles(styles)(Flows);
