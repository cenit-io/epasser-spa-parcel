/**
 *
 * SelectBoxIntegrations
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import Chip from '@mui/material/Chip';
import AbstractSelectBox from '../AbstractSelectBox';
import styles from './styles.jss';
import messages from './messages';

class SelectBoxIntegrations extends AbstractSelectBox {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = { value: [] };

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

  renderItemLabel = (item) => (`${item.name} (${item.channel_title})`);

  renderMultiValue = (selected) => selected.map((id) => {
    const { classes } = this.props;
    const item = this.state.items.find((i) => i.id === id);

    return (
      <Chip
        key={item.id}
        variant="outlined"
        label={item.name}
        avatar={<Avatar src={item.icon} className={classes.smallAvatar} />}
      />
    );
  })
}

export default withStyles(styles)(SelectBoxIntegrations);
