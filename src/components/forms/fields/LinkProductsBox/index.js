/**
 *
 * LinkProductsBox
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';

import PropTypes from 'prop-types';
import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from '../AbstractSelectBox';

class LinkProductsBox extends AbstractSelectBox {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = { value: [] };

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.items = props.items;
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  findById(id) {
    return this.state.items.find((item) => item.id === id);
  }

  renderItem = (item, idx) => (
    <MenuItem value={item.id} key={idx}>
      <ListItemText primary={item.name} />
    </MenuItem>
  )

  renderMultiValue = (selected) => selected.map((itemId) => (
    <Chip label={this.findById(itemId).name} key={itemId} variant="outlined" />
  ))
}

export default withStyles(styles)(LinkProductsBox);
