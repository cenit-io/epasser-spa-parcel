/**
 *
 * SelectBoxIntegration
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AbstractSelectBox from '../AbstractSelectBox';
import styles from './styles.jss';
import messages from './messages';

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
    );
  }
}

export default withStyles(styles)(SelectBoxIntegration);
