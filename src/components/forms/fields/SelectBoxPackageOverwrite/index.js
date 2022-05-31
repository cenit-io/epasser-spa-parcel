/**
 *
 * SelectBoxPackageOverwrite
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

class SelectBoxPackageOverwrite extends AbstractSelectBox {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  }

  static defaultProps = { value: '' };

  static messages = messages;

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.items = [false, true];
  }

  renderItem = (item, idx) => (
    <MenuItem value={item} key={idx}>
      <ListItemText primary={this.renderItemLabel(item)} />
    </MenuItem>
  )

  renderItemLabel = (item) => {
    const label = item ? 'do_overwrite' : 'do_not_overwrite';
    return <FormattedMessage key={item} {...messages[label]} />;
  }
}

export default withStyles(styles)(SelectBoxPackageOverwrite);
