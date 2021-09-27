/**
 *
 * ResourcesDataGrid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { request } from '../../base/request';

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
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import EnhancedTableHead from './EnhancedTableHead';
import Loading from "../Loading";

class ResourcesDataGrid extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    messages: PropTypes.instanceOf(Object).isRequired,
    apiPath: PropTypes.string.isRequired,
    fields: PropTypes.instanceOf(Object).isRequired,
    namespase: PropTypes.string.isRequired,
    formatValue: PropTypes.func,
  }

  static defaultProps = { formatValue: null };

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.rows = [];
    this.state.offset = 0;
    this.state.limit = 10;
    this.state.total = 0;
  }

  _loadItems() {
    const options = {
      url: this.props.apiPath,
      method: 'GET',
    };

    request(options).then((response) => {
      this.setState({ alreadyLoaded: true, rows: response.data, ...response.pagination })
    }).catch(error => {
      this.emitMessage('notify', error, this.props.namespase);
      this.setState({ alreadyLoaded: true, rows: [], offset: 0, total: 0 })
    });

    return this.renderWithoutData(messages.loading);
  }

  formatValue(row, field) {
    const { formatValue } = this.props;
    const value = row[field.id];

    return formatValue ? formatValue(value, row, field) : value;
  }

  renderCell(row) {
    const { fields } = this.props;

    return fields.map((field) => (
      <TableCell key={field.id} component="th" scope="row" padding="none">
        {this.formatValue(row, field)}
      </TableCell>
    ));
  }

  renderWithoutData(msg) {
    const { fields } = this.props;

    return (
      <TableRow>
        <TableCell colSpan={fields.length + 1}>
          <Typography variant="caption" color="secondary">
            <FormattedMessage {...msg} />
          </Typography>
          {msg.id === messages.loading.id && <Loading />}
        </TableCell>
      </TableRow>
    )
  }

  renderRows() {
    const { rows, alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this._loadItems();
    if (rows.length === 0) return this.renderWithoutData(messages.withoutData);

    let isItemSelected = false;

    return rows.map((row, idx) => (
      <TableRow
        // hover
        // onClick={(event) => handleClick(event, row.name)}
        role="checkbox"
        // aria-checked={isItemSelected}
        // tabIndex={-1}
        key={idx}
        selected={isItemSelected}
      >
        <TableCell padding="checkbox">
          <Checkbox checked={isItemSelected} />
        </TableCell>
        {this.renderCell(row)}
      </TableRow>
    ));
  }

  render() {
    const { classes, fields, messages } = this.props;
    const { total, limit, offset } = this.state;

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
              {this.renderRows()}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={total}
          rowsPerPage={limit}
          page={offset / limit}
          onPageChange={this.onChangePage}
          onRowsPerPageChange={this.onChangeRowsPerPage}
        />
      </Paper>
    );
  }

  onChangePage = (e) => {
    this.setState({ alreadyLoaded: false, rows: [], offset: e.target.value * this.state.limit })
  }

  onChangeRowsPerPage = (e, value) => {
    this.setState({ alreadyLoaded: false, rows: [], offset: 0, limit: e.target.value, total: 0 })
  }
}

export default withStyles(styles)(ResourcesDataGrid);
