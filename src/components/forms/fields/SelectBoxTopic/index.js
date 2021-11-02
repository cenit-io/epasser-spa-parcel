/**
 *
 * SelectBoxTopic
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { request } from "../../../../base/request";

import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from "../AbstractSelectBox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

class SelectBoxTopic extends AbstractSelectBox {
  static apiPath = 'webhooks/topics';

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => {
    return (
      <MenuItem value={item.topic} key={idx}>
        <ListItemText primary={item.title} />
      </MenuItem>
    )
  }
}

export default withStyles(styles)(SelectBoxTopic);
