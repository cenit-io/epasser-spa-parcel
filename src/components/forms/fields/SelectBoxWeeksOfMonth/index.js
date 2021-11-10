/**
 *
 * SelectBoxMonthsOfYear
 *
 */

import React from 'react';
import PropTypes from "prop-types";

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.jss';

import AbstractSelectBox from "../AbstractSelectBox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from '@material-ui/core/Chip';

class SelectBoxMonthsOfYear extends AbstractSelectBox {
  static propTypes = {
    value: PropTypes.array,
  }

  static defaultProps = { value: [] };

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
    this.state.multiple = true;
    this.state.items = ['First', 'Second', 'Third', 'Fourth', 'Last'];
  }

  get label() {
    return <FormattedMessage {...messages.label} />;
  }

  renderItem = (item, idx) => {
    return (
      <MenuItem value={item} key={idx}>
        <ListItemText primary={this.renderItemLabel(item)} />
      </MenuItem>
    )
  }

  renderItemLabel = (item) => {
    return <FormattedMessage key={item} {...messages[item]} />
  }

  renderMultiValue = (selected) => {
    return selected.map((item, idx) => <Chip label={this.renderItemLabel(item)} key={item} variant="outlined" />);
  }
}

export default withStyles(styles)(SelectBoxMonthsOfYear);
