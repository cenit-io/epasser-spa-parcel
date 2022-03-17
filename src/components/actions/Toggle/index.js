/**
 *
 * Toggle
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';
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
    let { disabled } = this.props;
    const { locked, selectionItems } = this.state;

    if (typeof disabled === 'function') disabled = disabled(selectionItems);

    return locked || selectionItems.length === 0 || disabled;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Toggle);
