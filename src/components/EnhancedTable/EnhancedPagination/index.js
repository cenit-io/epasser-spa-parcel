/**
 *
 * EnhancedPagination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TablePagination from '@material-ui/core/TablePagination';
import AbstractComponent from '../../AbstractComponent';
import styles from '../styles.jss';

class EnhancedPagination extends AbstractComponent {
  static propTypes = {
    total: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onItemsPerPageChange: PropTypes.func.isRequired,
  }

  render() {
    const {
      classes, total, limit, offset, onPageChange, onItemsPerPageChange,
    } = this.props;

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
        onRowsPerPageChange={onItemsPerPageChange}
      />
    );
  }
}

export default withStyles(styles)(EnhancedPagination);
