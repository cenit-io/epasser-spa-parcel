/**
 *
 * EnhancedRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

import styles from '../styles.jss';
import session from '../../../base/session';

import AbstractComponent from '../../AbstractComponent';

class EnhancedRow extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    columns: PropTypes.instanceOf(Object).isRequired,
    multiSelect: PropTypes.bool.isRequired,
    selectable: PropTypes.bool,
    row: PropTypes.instanceOf(Object).isRequired,
    itemId: PropTypes.string.isRequired,
    padding: PropTypes.string,
    onChangeItemSelection: PropTypes.func.isRequired,
  }

  static defaultProps = { padding: 'normal', multiSelect: true, selectable: true };

  constructor(props) {
    super(props);
    this.state.isSelected = false;
    this.setMessagingListener('changeSelectAll', this.onChangeSelection);
    this.setMessagingListener('SelectById', this.onSelectById);
  }

  formatValue = (row, column) => {
    const value = row[column.id];
    const { format: Format } = column;

    if (Format) {
      if ((typeof Format === 'object' && !!Format.render) || (Format.prototype && !!Format.prototype.isReactComponent)) {
        return <Format value={value} row={row} column={column} />;
      }
      if (typeof Format === 'function') return Format(value, row, column);
    }

    return value;
  }

  renderCell(row) {
    const { classes, columns, padding } = this.props;

    return columns.map((column) => (
      <TableCell
        className={classes.cell} key={column.id} component="td"
        scope="row"
        size="small"
        align={column.align || 'left'}
        padding={column.padding || padding}
      >
        {this.formatValue(row, column)}
      </TableCell>
    ));
  }

  renderSelectionComponent() {
    const { multiSelect } = this.props;
    const { isSelected } = this.state;

    if (multiSelect) return <Checkbox checked={isSelected} onChange={this.onChangeSelection} />;

    return <Radio name="itemId" checked={isSelected} onChange={this.onChangeSelection} />;
  }

  renderSelectionCell() {
    const { classes, selectable } = this.props;

    if (!selectable) return null;

    return (
      <TableCell
        className={`${classes.cell} ${classes.cellSelection}`}
        padding={session.iFrameDetected ? 'normal' : 'checkbox'}
      >
        {this.renderSelectionComponent()}
      </TableCell>
    );
  }

  render() {
    const { classes, row } = this.props;
    const { isSelected } = this.state;

    return (
      <TableRow className={classes.row} selected={isSelected} tabIndex={-1}>
        {this.renderSelectionCell()}
        {this.renderCell(row)}
      </TableRow>
    );
  }

  onChangeSelection = (e, value) => {
    const { itemId, row, onChangeItemSelection } = this.props;

    this.setState({ isSelected: value });

    onChangeItemSelection(value, itemId, row);
  }

  onSelectById = (pItemId) => {
    const { itemId } = this.props;
    const { isSelected } = this.state;
    const value = (itemId === pItemId);

    if (isSelected !== value) this.onChangeSelection(null, value);
  }
}

export default withStyles(styles)(EnhancedRow);
