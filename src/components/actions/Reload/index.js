/**
 *
 * Reload
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractAction from "../AbstractAction";
import Icon from '@material-ui/icons/Refresh';

class Reload extends AbstractAction {
  get icon() {
    return <Icon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }
}

export default withStyles(styles)(Reload);
