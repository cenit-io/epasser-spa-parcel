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
    fields: PropTypes.instanceOf(Object).isRequired,
    row: PropTypes.instanceOf(Object).isRequired,
    padding: PropTypes.string,
  }

  static defaultProps = { padding: 'normal' };

  formatValue = (row, field) => {
    const value = row[field.id];

    return (value !== null && typeof field.format === 'function') ? field.format(value, row, field) : value;
  }

  renderCell(row) {
    const { classes, fields, padding } = this.props;

    return fields.map((field) => (
      <TableCell className={classes.cell} key={field.id} component="td" scope="row" size="small"
                 align={field.align || 'left'}
                 padding={field.padding || padding}>
        {this.formatValue(row, field)}
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
