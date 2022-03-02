/**
 *
 * SelectBoxSchedulerTimeFrequency
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

class SelectBoxSchedulerTimeFrequency extends AbstractSelectBox {
  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.items = ['appointed', 'minutes', 'hours', 'days', 'weeks', 'months'];
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => (
    <MenuItem value={item} key={idx}>
      <ListItemText primary={<FormattedMessage {...messages[item]} />} />
    </MenuItem>
  )
}

export default withStyles(styles)(SelectBoxSchedulerTimeFrequency);
