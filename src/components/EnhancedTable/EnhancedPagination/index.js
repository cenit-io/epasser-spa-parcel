/**
 *
 * EnhancedPagination
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
import TablePagination from "@material-ui/core/TablePagination";

class EnhancedPagination extends AbstractComponent {
  static propTypes = {
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
  }

  render() {
    const { classes, total, limit, offset, onPageChange, onRowsPerPageChange } = this.props;

    if (total === 0) return '';

    return (
      <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={total}
        rowsPerPage={limit}
        page={offset / limit}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    )
  }
}

export default withStyles(styles)(EnhancedPagination);
