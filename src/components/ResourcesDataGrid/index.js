/**
 *
 * ResourcesDataGrid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.jss';

import AbstractComponent from "../AbstractComponent";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import EnhancedTableHead from './EnhancedTableHead';

class ResourcesDataGrid extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    messages: PropTypes.instanceOf(Object).isRequired,
    fields: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { classes, fields, messages } = this.props;

    return (
      <Paper className={classes.paper}>
        {/*<EnhancedTableToolbar numSelected={selected.length} />*/}
        <TableContainer>
          <Table className={classes.table}
                 aria-labelledby="tableTitle"
                 size='small'
                 aria-label="enhanced table">
            <EnhancedTableHead fields={fields} messages={messages}
              // numSelected={selected.length}
              // order={order}
              // orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              // onRequestSort={handleRequestSort}
              // rowCount={rows.length}
            />
            <TableBody>
              {/*{stableSort(rows, getComparator(order, orderBy))*/}
              {/*  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/}
              {/*  .map((row, index) => {*/}
              {/*    const isItemSelected = isSelected(row.name);*/}
              {/*    const labelId = `enhanced-table-checkbox-${index}`;*/}

              {/*    return (*/}
              {/*      <TableRow*/}
              {/*        hover*/}
              {/*        onClick={(event) => handleClick(event, row.name)}*/}
              {/*        role="checkbox"*/}
              {/*        aria-checked={isItemSelected}*/}
              {/*        tabIndex={-1}*/}
              {/*        key={row.name}*/}
              {/*        selected={isItemSelected}*/}
              {/*      >*/}
              {/*        <TableCell padding="checkbox">*/}
              {/*          <Checkbox*/}
              {/*            checked={isItemSelected}*/}
              {/*            inputProps={{ 'aria-labelledby': labelId }}*/}
              {/*          />*/}
              {/*        </TableCell>*/}
              {/*        <TableCell component="th" id={labelId} scope="row" padding="none">*/}
              {/*          {row.name}*/}
              {/*        </TableCell>*/}
              {/*        <TableCell align="right">{row.calories}</TableCell>*/}
              {/*        <TableCell align="right">{row.fat}</TableCell>*/}
              {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
              {/*        <TableCell align="right">{row.protein}</TableCell>*/}
              {/*      </TableRow>*/}
              {/*    );*/}
              {/*  })}*/}
              {/*{emptyRows > 0 && (*/}
              {/*  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>*/}
              {/*    <TableCell colSpan={6} />*/}
              {/*  </TableRow>*/}
              {/*)}*/}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          // count={rows.length}
          // rowsPerPage={rowsPerPage}
          // page={page}
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(ResourcesDataGrid);
