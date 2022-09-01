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

  static icon = <Icon />

  onClick = (e) => {
    const { withProps: props = {} } = this.props;
    const moduleId = `${this.moduleBaseId}/Add`;
    this.emitMessage('openModule', [moduleId, props], this.mainModuleId);
  }
}

export default withStyles(styles)(Add);
