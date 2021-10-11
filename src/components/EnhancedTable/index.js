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
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import EnhancedHead from './EnhancedHead';
import EnhancedRow from "./EnhancedRow";
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
    this.state.items = [];
    this.state.offset = 0;
    this.state.limit = 10;
    this.state.total = 0;
    this.state.searchTerm = props.searchTerm || '';
    this._selectionItems = {};

    this.addMessagingListener('reload', this.onReload, props.moduleId);
    this.addMessagingListener('successfulLoadItems', this.onSuccessfulLoadItems, props.moduleId);
    this.addMessagingListener('failedLoadItems', this.onFailedLoadItems, props.moduleId);
    this.addMessagingListener('changeSearchTerm', this.onChangeSearchTerm, props.moduleId);
  }

  _loadItems() {
    const { moduleId } = this.props;
    const { limit, offset, searchTerm: term } = this.state;

    const options = {
      url: this.props.apiPath,
      method: 'GET',
      params: { limit, offset, term }
    };

    this._selectionItems = {};
    // this.onChangeSelection();

    request(options).then((response) => {
      this.emitMessage('successfulLoadItems', response, moduleId);
    }).catch(error => {
      this.emitMessage('failedLoadItems', error, moduleId);
    });

    return this.renderWithoutData(messages.loading);
  }

  getItemId(item) {
    const { getItemId } = this.props;
    return getItemId ? getItemId(item) : item.id;
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
    const { columns, moduleId } = this.props;
    const { items, alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this._loadItems();
    if (items.length === 0) return this.renderWithoutData(messages.withoutData);

    return items.map((item, idx) => {
      return <EnhancedRow moduleId={moduleId}
                          row={item} columns={columns}
                          itemId={item.id || idx} key={idx}
                          onChangeItemSelection={this.onChangeItemSelection} />
    });
  }

  render() {
    const { classes, columns, moduleId, messages, className } = this.props;
    const { total, limit, offset } = this.state;

    return (
      <Paper className={className || classes.root}>
        {/*<EnhancedTableToolbar numSelected={selected.length} />*/}
        <TableContainer className={classes.container}>
          <Table className={classes.table} size='small'>
            <EnhancedHead columns={columns} messages={messages} moduleId={moduleId}
              // order={order}
              // orderBy={orderBy}
                          onChangeSelectAll={this.onChangeSelectAll}
              // onRequestSort={handleRequestSort}
            />
            <TableBody>
              {this.renderRows()}
            </TableBody>
          </Table>
        </TableContainer>
        <EnhancedPagination total={total} limit={limit} offset={offset}
                            onPageChange={this.onPageChange}
                            onItemsPerPageChange={this.onItemsPerPageChange}
        />
      </Paper>
    );
  }

  onPageChange = (e, value) => {
    this.setState({
      alreadyLoaded: false,
      items: [],
      offset: value * this.state.limit,
      total: 0,
    });
  }

  onItemsPerPageChange = (e) => {
    this.setState({
      alreadyLoaded: false,
      items: [],
      offset: 0,
      limit: e.target.value,
      total: 0,
    });
  }

  onChangeSearchTerm = (value) => {
    this.setState({
      alreadyLoaded: false,
      items: [],
      offset: 0,
      total: 0,
      searchTerm: value,
    });
  }

  onSuccessfulLoadItems = (response) => {
    this.setState({ alreadyLoaded: true, items: response.data, ...response.pagination });
  }

  onFailedLoadItems = (error) => {
    this.emitMessage('notify', error, this.props.moduleId);
    this.setState({ alreadyLoaded: true, items: [], offset: 0, total: 0 });
  }

  onReload = () => {
    this.setState({ alreadyLoaded: false, items: [], total: 0 });
  }

  onChangeItemSelection = (isSelected, itemId, row) => {
    if (isSelected) {
      this._selectionItems[itemId] = row;
    } else {
      delete this._selectionItems[itemId];
    }
    this.onChangeSelection();
  }

  onChangeSelection = () => {
    const selectedItems = Object.values(this._selectionItems);

    this.emitMessage('changeSelection', [selectedItems, this.state.items], this.props.moduleId);
  }

  onChangeSelectAll = (e, value) => {
    this.emitMessage('changeSelectAll', [e, value], this.props.moduleId);
  }
}

export default withStyles(styles)(EnhancedTable);
