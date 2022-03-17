/**
 *
 * List
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import Icon from '@mui/icons-material/ArrowBackIosOutlined';
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
