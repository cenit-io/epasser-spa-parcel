/**
 *
 * SelectBoxIntegration
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from "../AbstractSelectBox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

class SelectBoxIntegration extends AbstractSelectBox {
  static apiPath = 'integrations';

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => {
    const { classes } = this.props;

    return (
      <MenuItem value={item.id} key={idx}>
        <ListItemIcon>
          <Avatar src={item.icon} className={classes.smallAvatar} />
        </ListItemIcon>
        <ListItemText primary={`${item.name} (${item.channel_title})`} />
      </MenuItem>
    )
  }
}

export default withStyles(styles)(SelectBoxIntegration);
