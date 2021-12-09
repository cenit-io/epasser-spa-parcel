/**
 *
 * List
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import Icon from '@material-ui/icons/List';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractAction from '../AbstractAction';

class List extends AbstractAction {
  get icon() {
    return <Icon />;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }
}

export default withStyles(styles)(List);
