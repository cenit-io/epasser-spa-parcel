/**
 *
 * EnhancedRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import AbstractComponent from '../../AbstractComponent';
import styles from '../styles.jss';

class EnhancedRow extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    columns: PropTypes.instanceOf(Object).isRequired,
    row: PropTypes.instanceOf(Object).isRequired,
    padding: PropTypes.string,
    itemId: PropTypes.string.isRequired,
    onChangeItemSelection: PropTypes.func.isRequired,
  }

  static defaultProps = { padding: 'normal' };

  constructor(props) {
    super(props);
    this.state.isSelected = false;
    this.addMessagingListener('changeSelectAll', this.onChangeSelection);
  }

  formatValue = (row, column) => {
    const value = row[column.id];

    return (value !== null && typeof column.format === 'function') ? column.format(value, row, column) : value;
  }

  renderCell(row) {
    const { classes, columns, padding } = this.props;

    return columns.map((column) => (
      <TableCell
        className={classes.cell} key={column.id} component="td"
        scope="row" size="small"
        align={column.align || 'left'}
        padding={column.padding || padding}
      >
        {this.formatValue(row, column)}
      </TableCell>
    ));
  }

  render() {
    const { classes, row } = this.props;
    const { isSelected } = this.state;

    return (
      <TableRow className={classes.row} selected={isSelected} tabIndex={-1}>
        <TableCell className={classes.cell} padding="checkbox">
          <Checkbox checked={isSelected} onChange={this.onChangeSelection} />
        </TableCell>
        {this.renderCell(row)}
      </TableRow>
    );
  }

  onChangeSelection = (e, value) => {
    const { itemId, row, onChangeItemSelection } = this.props;
    this.setState({ isSelected: value });
    onChangeItemSelection(value, itemId, row);
  }
}

export default withStyles(styles)(EnhancedRow);
