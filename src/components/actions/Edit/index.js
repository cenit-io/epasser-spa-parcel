/**
 *
 * Edit
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractAction from "../AbstractAction";
import RefreshIcon from '@material-ui/icons/Refresh';

class Edit extends AbstractAction {
  get icon() {
    return <RefreshIcon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }
}

export default withStyles(styles)(Edit);
