/**
 *
 * Start
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { StartIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Start extends AbstractWithSelectionAction {
  static messages = messages

  get icon() {
    return <StartIcon />;
  }
}

export default withStyles(styles)(Start);
