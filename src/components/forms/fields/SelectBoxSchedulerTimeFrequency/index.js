/**
 *
 * SelectBoxSchedulerTimeFrequency
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from "../AbstractSelectBox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

class SelectBoxSchedulerTimeFrequency extends AbstractSelectBox {
  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.items = ['appointed', 'minutes', 'hours', 'days', 'weeks', 'months'];
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => {
    return (
      <MenuItem value={item} key={idx}>
        <ListItemText primary={<FormattedMessage {...messages[item]} />} />
      </MenuItem>
    )
  }
}

export default withStyles(styles)(SelectBoxSchedulerTimeFrequency);
