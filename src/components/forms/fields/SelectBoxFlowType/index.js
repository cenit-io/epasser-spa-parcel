/**
 *
 * SelectBoxFlowType
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

class SelectBoxFlowType extends AbstractSelectBox {
  static apiPath = 'flows/types';

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => {
    return (
      <MenuItem value={item.type} key={idx}>
        <ListItemText primary={item.title} />
      </MenuItem>
    )
  }
}

export default withStyles(styles)(SelectBoxFlowType);
