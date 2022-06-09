/**
 *
 * UnLink
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/LinkOff';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  static messages = messages

  get color() {
    return this.disabled ? 'inherit' : 'error';
  }

  get icon() {
    return <Icon color={this.color} />;
  }
}

export default withStyles(styles)(Action);
