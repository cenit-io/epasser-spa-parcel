/**
 *
 * Add
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/Add';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractAction from '../AbstractAction';

class Add extends AbstractAction {
  static messages = messages

  get icon() {
    return <Icon />;
  }
}

export default withStyles(styles)(Add);
