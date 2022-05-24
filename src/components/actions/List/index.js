/**
 *
 * List
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/List';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractAction from '../AbstractAction';

class List extends AbstractAction {
  static messages = messages

  static icon = <Icon />
}

export default withStyles(styles)(List);
