/**
 *
 * SelectBoxLinkVariantsAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from '../AbstractSelectBox';

class SelectBoxLinkVariantsAction extends AbstractSelectBox {
  static propTypes = {
    value: PropTypes.string,
  }

  static defaultProps = { value: '' }

  static messages = messages;

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.items = ['none', 'selected', 'new', 'all'];
  }

  renderItem = (item, idx) => (
    <MenuItem value={item} key={idx}>
      <ListItemText primary={this.renderItemLabel(item)} />
    </MenuItem>
  )

  renderItemLabel = (item) => <FormattedMessage key={item} {...messages[item]} />
}

export default withStyles(styles)(SelectBoxLinkVariantsAction);
