/**
 *
 * SelectBoxFlowType
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from '../AbstractSelectBox';

class SelectBoxFlowType extends AbstractSelectBox {
  static apiPath = 'flows/types';

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => (
    <MenuItem value={item.type} key={idx}>
      <ListItemText primary={item.title} />
    </MenuItem>
  )
}

export default withStyles(styles)(SelectBoxFlowType);
