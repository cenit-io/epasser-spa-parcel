/**
 *
 * EnhancedTable
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
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableRow from "./EnhancedTableRow";
import Loading from "../Loading";
import EnhancedPagination from "./EnhancedPagination";

class EnhancedTable extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    messages: PropTypes.instanceOf(Object).isRequired,
    apiPath: PropTypes.string.isRequired,
    columns: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
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

    this.addMessagingListener('reload', this.onReload, props.moduleId);
    this.addMessagingListener('setState', this.onSetState, props.moduleId);
  }

  _loadItems() {
    const { moduleId } = this.props;
    const { limit, offset } = this.state;

    const options = {
      url: this.props.apiPath,
      method: 'GET',
      params: { limit, offset }
    };

    request(options).then((response) => {
      const newState = { alreadyLoaded: true, rows: response.data, ...response.pagination };
      this.emitMessage('setState', newState, moduleId);
    }).catch(error => {
      this.emitMessage('notify', error, moduleId);
      const newState = { alreadyLoaded: true, rows: [], offset: 0, total: 0 };
      this.emitMessage('setState', newState, moduleId);
    });

    return this.renderWithoutData(messages.loading);
  }

  renderWithoutData(msg) {
    const { columns } = this.props;

    return (
      <TableRow>
        <TableCell colSpan={columns.length + 1}>
          <Typography variant="caption" color="secondary">
            <FormattedMessage {...msg} />
          </Typography>
          {msg.id === messages.loading.id && <Loading />}
        </TableCell>
      </TableRow>
    )
  }

  renderRows() {
    const { columns } = this.props;
    const { rows, alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this._loadItems();
    if (rows.length === 0) return this.renderWithoutData(messages.withoutData);

    return rows.map((row, idx) => <EnhancedTableRow row={row} columns={columns} key={idx} />);
  }


  render() {
    const { classes, columns, messages, className } = this.props;
    const { total, limit, offset } = this.state;

    return (
      <Paper className={className || classes.root}>
        {/*<EnhancedTableToolbar numSelected={selected.length} />*/}
        <TableContainer className={classes.container}>
          <Table className={classes.table} size='small'>
            <EnhancedTableHead columns={columns} messages={messages}
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
        <EnhancedPagination total={total} limit={limit} offset={offset}
                            onPageChange={this.onPageChange}
                            onRowsPerPageChange={this.onRowsPerPageChange}
        />
      </Paper>
    );
  }

  onPageChange = (e, value) => {
    this.setState({
      alreadyLoaded: false,
      rows: [],
      offset: value * this.state.limit,
      total: 0
    });
  }

  onRowsPerPageChange = (e) => {
    this.setState({
      alreadyLoaded: false,
      rows: [],
      offset: 0,
      limit: e.target.value,
      total: 0
    });
  }

  onReload = () => {
    this.setState({ alreadyLoaded: false, rows: [], total: 0 });
  }

  onSetState = (state) => {
    this.setState(state);
  }
}

export default withStyles(styles)(EnhancedTable);
