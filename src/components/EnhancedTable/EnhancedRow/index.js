/**
 *
 * EnhancedRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from '../styles.jss';

import AbstractComponent from "../../AbstractComponent";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from "@material-ui/core/Checkbox";

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
    this.addMessagingListener('changeSelectAll', this.onChangeSelection, props.moduleId);
  }

  formatValue = (row, column) => {
    const value = row[column.id];

    return (value !== null && typeof column.format === 'function') ? column.format(value, row, column) : value;
  }

  renderCell(row) {
    const { classes, columns, padding } = this.props;

    return columns.map((column) => (
      <TableCell className={classes.cell} key={column.id} component="td" scope="row" size="small"
                 align={column.align || 'left'}
                 padding={column.padding || padding}>
        {this.formatValue(row, column)}
      </TableCell>
    ));
  }

  render() {
    const { classes, row } = this.props;
    const { isSelected } = this.state;

    return (
      <TableRow
        // hover
        // onClick={(event) => handleClick(event, row.name)}
        role="checkbox"
        // aria-checked={isItemSelected}
        // tabIndex={-1}
        selected={isSelected}
      >
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
    onChangeItemSelection(value, itemId, row)
  }
}

export default withStyles(styles)(EnhancedRow);
