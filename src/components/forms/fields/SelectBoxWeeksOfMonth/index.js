/**
 *
 * SelectBoxMonthsOfYear
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from '../AbstractSelectBox';

class SelectBoxMonthsOfYear extends AbstractSelectBox {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = { value: [] };

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.items = ['First', 'Second', 'Third', 'Fourth', 'Last'];
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => (
    <MenuItem value={item} key={idx}>
      <ListItemText primary={this.renderItemLabel(item)} />
    </MenuItem>
  )

  renderItemLabel = (item) => <FormattedMessage key={item} {...messages[item]} />

  renderMultiValue = (selected) => selected.map((item) => <Chip label={this.renderItemLabel(item)} key={item} variant="outlined" />)
}

export default withStyles(styles)(SelectBoxMonthsOfYear);
