/**
 *
 * Retry
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { RetryIcon } from '../../Icons';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Retry extends AbstractWithSelectionAction {
  get icon() {
    return <RetryIcon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    const hasNoFailedTasks = (items.find((item) => item.status !== 'failed')) !== undefined;
    return locked || items.length === 0 || hasNoFailedTasks;
  }
}

export default withStyles(styles)(Retry);
