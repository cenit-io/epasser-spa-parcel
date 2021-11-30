/**
 *
 * Authorize
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';
import { AuthorizeIcon } from '../../Icons';

class Authorize extends AbstractWithSelectionAction {
  get icon() {
    return <AuthorizeIcon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].authorized;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems[0]);
  }
}

export default withStyles(styles)(Authorize);
