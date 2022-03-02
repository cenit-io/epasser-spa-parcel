/**
 *
 * Install
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';
import { InstallIcon } from '../../Icons';

class Install extends AbstractWithSelectionAction {
  get icon() {
    return <InstallIcon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].status === 'installed';
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Install);
