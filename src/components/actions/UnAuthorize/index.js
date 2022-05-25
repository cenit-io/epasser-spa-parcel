/**
 *
 * UnAuthorize
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { UnAuthorizeIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';

import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class UnAuthorize extends AbstractWithSelectionAction {
  static messages = messages

  get color() {
    return this.disabled ? 'inherit' : 'error';
  }

  get icon() {
    return <UnAuthorizeIcon color={this.color} />;
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length === 0 || (items.find((item) => !item.authorized) !== undefined);
  }
}

export default withStyles(styles)(UnAuthorize);
