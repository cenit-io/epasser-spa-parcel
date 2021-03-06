/**
 *
 * SelectBoxTopic
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from '../AbstractSelectBox';

class SelectBoxTopic extends AbstractSelectBox {
  static apiPath = 'webhooks/topics';

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => (
    <MenuItem value={item.topic} key={idx}>
      <ListItemText primary={item.title} />
    </MenuItem>
  )
}

export default withStyles(styles)(SelectBoxTopic);
