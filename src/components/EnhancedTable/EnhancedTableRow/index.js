/**
 *
 * EnhancedTableRow
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

class EnhancedTableRow extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    columns: PropTypes.instanceOf(Object).isRequired,
    row: PropTypes.instanceOf(Object).isRequired,
    padding: PropTypes.string,
  }

  static defaultProps = { padding: 'normal' };

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
    const isItemSelected = false;

    return (
      <TableRow
        // hover
        // onClick={(event) => handleClick(event, row.name)}
        role="checkbox"
        // aria-checked={isItemSelected}
        // tabIndex={-1}
        selected={isItemSelected}
      >
        <TableCell className={classes.cell} padding="checkbox">
          <Checkbox checked={isItemSelected} />
        </TableCell>
        {this.renderCell(row)}
      </TableRow>
    );
  }
}

export default withStyles(styles)(EnhancedTableRow);
