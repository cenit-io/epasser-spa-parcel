/**
 *
 * Link
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import { LinkIcon as Icon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />
}

export default withStyles(styles)(Action);
