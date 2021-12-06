/**
 *
 * Toggle
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';
import { ToggleIcon } from '../../Icons';

class Toggle extends AbstractWithSelectionAction {
  get icon() {
    return <ToggleIcon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Toggle);
