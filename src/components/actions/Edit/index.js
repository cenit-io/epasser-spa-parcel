/**
 *
 * Edit
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';

import Icon from '@mui/icons-material/Edit';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Edit extends AbstractWithSelectionAction {
  static messages = messages

  static icon = <Icon />

  static multiSelection = false

  onClick = (e) => {
    const { withProps: props = {} } = this.props;
    const moduleId = `${this.moduleBaseId}/Edit`;
    this.emitMessage('openModule', [moduleId, { ...props, item: this.selection }], this.mainModuleId);
  }
}

export default withStyles(styles)(Edit);
