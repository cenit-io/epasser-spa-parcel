/**
 *
 * EnhancedTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
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
    multiSelect: PropTypes.bool,
    selectable: PropTypes.bool,
    limit: PropTypes.number,
  }

  static defaultProps = {
    formatValue: null,
    multiSelect: true,
    selectable: true,
    limit: 10,
  };

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.items = [];
    this.state.offset = 0;
    this.state.limit = props.limit || 10;
    this.state.total = 0;
    this.state.searchTerm = props.searchTerm || '';
    this.selectionItems = {};

    this.setMessagingListener('reload', this.onReload);
    this.setMessagingListener('loadItemsSuccessful', this.onLoadItemsSuccessful);
    this.setMessagingListener('loadItemsFailed', this.onLoadItemsFailed);
    this.setMessagingListener('changeSearchTerm', this.onChangeSearchTerm);
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
    const { columns, moduleId, multiSelect, selectable } = this.props;
    const { items, alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this.loadItems();
    if (items.length === 0) return this.renderWithoutData(messages.withoutData);

    return items.map((item, idx) => (
      <EnhancedRow
        moduleId={moduleId}
        multiSelect={multiSelect}
        selectable={selectable}
        row={item} columns={columns}
        itemId={item.id || String(idx)}
        key={item.id || String(idx)}
        onChangeItemSelection={this.onChangeItemSelection}
      />
    ));
  }

  render() {
    const { total, limit, offset } = this.state;
    const {
      classes,
      columns,
      moduleId,
      className,
      multiSelect,
      selectable,
      messages: pMessages,
    } = this.props;

    return (
      <Paper className={className || classes.root}>
        <TableContainer className={classes.container}>
          <Table className={classes.table} size="small">
            <EnhancedHead
              columns={columns}
              messages={pMessages}
              moduleId={moduleId}
              multiSelect={multiSelect}
              selectable={selectable}
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
    if (!this.state.alreadyLoaded) return;

    this.clearSelection();
    this.setState({
      alreadyLoaded: false, items: [], total: 0,
    });
  }

  onChangeItemSelection = (isSelected, itemId, row) => {
    if (isSelected) {
      if (!this.props.multiSelect) {
        this.emitMessage('SelectById', [itemId]);
        this.selectionItems = {};
      }
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
