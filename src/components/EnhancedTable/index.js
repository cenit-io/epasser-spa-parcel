/**
 *
 * EnhancedTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import AbstractComponent from '../AbstractComponent';
import styles from './styles.jss';
import messages from './messages';
import EnhancedHead from './EnhancedHead';
import EnhancedRow from './EnhancedRow';
import Loading from '../Loading';
import EnhancedPagination from './EnhancedPagination';

class EnhancedTable extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    messages: PropTypes.instanceOf(Object).isRequired,
    columns: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
    formatValue: PropTypes.func,
  }

  static defaultProps = { formatValue: null };

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.items = [];
    this.state.offset = 0;
    this.state.limit = 10;
    this.state.total = 0;
    this.state.searchTerm = props.searchTerm || '';
    this.selectionItems = {};

    this.addMessagingListener('reload', this.onReload);
    this.addMessagingListener('loadItemsSuccessful', this.onLoadItemsSuccessful);
    this.addMessagingListener('loadItemsFailed', this.onLoadItemsFailed);
    this.addMessagingListener('changeSearchTerm', this.onChangeSearchTerm);
  }

  loadItems() {
    const { limit, offset, searchTerm: term } = this.state;
    this.emitMessage('startLoadItems', [limit, offset, term], this.moduleId, 0);
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
    );
  }

  renderRows() {
    const { columns, moduleId } = this.props;
    const { items, alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this.loadItems();
    if (items.length === 0) return this.renderWithoutData(messages.withoutData);

    return items.map((item, idx) => (
      <EnhancedRow
        moduleId={moduleId}
        row={item} columns={columns}
        itemId={item.id || idx}
        key={item.id || idx}
        onChangeItemSelection={this.onChangeItemSelection}
      />
    ));
  }

  render() {
    const { total, limit, offset } = this.state;
    const {
      classes, columns, moduleId, className,
      messages: pMessages,
    } = this.props;

    return (
      <Paper className={className || classes.root}>
        <TableContainer className={classes.container}>
          <Table className={classes.table} size="small">
            <EnhancedHead
              columns={columns} messages={pMessages} moduleId={moduleId}
              // order={order}
              // orderBy={orderBy}
              onChangeSelectAll={this.onChangeSelectAll}
              // onRequestSort={handleRequestSort}        <TableContainer className={classes.container}>
            />
            <TableBody>
              {this.renderRows()}
            </TableBody>
          </Table>
        </TableContainer>
        <EnhancedPagination
          total={total} limit={limit} offset={offset}
          onPageChange={this.onPageChange}
          onItemsPerPageChange={this.onItemsPerPageChange}
        />
      </Paper>
    );
  }

  clearSelection = () => {
    this.selectionItems = {};
    this.onChangeSelection();
  }

  onPageChange = (e, value) => {
    this.clearSelection();
    this.setState({
      alreadyLoaded: false,
      items: [],
      offset: value * this.state.limit,
      total: 0,
    });
  }

  onItemsPerPageChange = (e) => {
    this.clearSelection();
    this.setState({
      alreadyLoaded: false,
      items: [],
      offset: 0,
      limit: e.target.value,
      total: 0,
    });
  }

  onChangeSearchTerm = (value) => {
    this.clearSelection();
    this.setState({
      alreadyLoaded: false,
      items: [],
      offset: 0,
      total: 0,
      searchTerm: value,
    });
  }

  onLoadItemsSuccessful = (response) => {
    this.setState({
      alreadyLoaded: true, items: response.data, ...response.pagination,
    });
  }

  onLoadItemsFailed = (error) => {
    this.notify(error);
    this.setState({
      alreadyLoaded: true, items: [], offset: 0, total: 0,
    });
  }

  onReload = () => {
    this.clearSelection();
    this.setState({
      alreadyLoaded: false, items: [], total: 0,
    });
  }

  onChangeItemSelection = (isSelected, itemId, row) => {
    if (isSelected) {
      this.selectionItems[itemId] = row;
    } else {
      delete this.selectionItems[itemId];
    }
    this.onChangeSelection();
  }

  onChangeSelection = () => {
    const selectedItems = Object.values(this.selectionItems);
    this.emitMessage('changeSelection', [selectedItems, this.state.items]);
  }

  onChangeSelectAll = (e, value) => {
    this.emitMessage('changeSelectAll', [e, value]);
  }
}

export default withStyles(styles)(EnhancedTable);
