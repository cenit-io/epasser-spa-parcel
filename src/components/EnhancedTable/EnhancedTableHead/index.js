/**
 *
 * EnhancedTableHead
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import styles from '../styles.jss';

import AbstractComponent from "../../AbstractComponent";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';

class EnhancedTableHead extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    messages: PropTypes.instanceOf(Object).isRequired,
    columns: PropTypes.instanceOf(Object).isRequired,
    padding: PropTypes.string,
  }

  static defaultProps = { padding: 'normal' };

  onChangeSort = (event, property) => {
    const { orderBy, order } = this.state;
    const isAsc = orderBy === property && order === 'asc';

    this.setState({
      orderBy: property,
      order: isAsc ? 'desc' : 'asc',
    });
  }

  createSortHandler = (columnId) => (event) => {
    this.onChangeSort(event, columnId);
  }

  renderColumnLabel(column) {
    if (column.label !== undefined) return column.label;

    const { messages } = this.props;
    const msg = messages[`field_${column.id}`];

    return msg ? <FormattedMessage {...msg} /> : column.id
  }

  renderColumns() {
    const { classes, columns, padding } = this.props;
    const { orderBy, order } = this.state;

    return columns.map((column) => (
      <TableCell className={classes.cell} key={column.id}
                 align={column.align || 'left'}
                 padding={column.padding || padding}
                 width={column.width || 'auto'}
                 sortDirection={orderBy === column.id ? order : false}>
        <TableSortLabel active={orderBy === column.id}
                        direction={orderBy === column.id ? order : 'asc'}
                        onClick={this.createSortHandler(column.id)}>
          {this.renderColumnLabel(column)}
        </TableSortLabel>
      </TableCell>
    ))
  }

  render() {
    const { classes, columns } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell className={classes.cell} padding="checkbox">
            <Checkbox
              // indeterminate={numSelected > 0 && numSelected < rowCount}
              // checked={rowCount > 0 && numSelected === rowCount}
              // onChange={onSelectAllClick}
            />
          </TableCell>
          {this.renderColumns(columns)}
        </TableRow>
      </TableHead>
    );
  }
}

export default withStyles(styles)(EnhancedTableHead);
