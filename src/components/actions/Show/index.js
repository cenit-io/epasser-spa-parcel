/**
 *
 * Show
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { ShowIcon as Icon } from '../../Icons';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Action extends AbstractWithSelectionAction {
  get icon() {
    return <Icon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  get disabled() {
    let { disabled } = this.props;
    const { locked, selectionItems } = this.state;

    if (typeof disabled === 'function') disabled = disabled(selectionItems);

    return locked || selectionItems.length !== 1 || disabled;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Action);
