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
    fields: PropTypes.instanceOf(Object).isRequired,
  }

  onChangeSort = (event, property) => {
    const { orderBy, order } = this.state;
    const isAsc = orderBy === property && order === 'asc';

    this.setState({
      orderBy: property,
      order: isAsc ? 'desc' : 'asc',
    });
  }

  createSortHandler = (fieldId) => (event) => {
    this.onChangeSort(event, fieldId);
  }

  renderFieldLabel(field) {
    if (field.label !== undefined) return field.label;

    const { messages } = this.props;
    const msg = messages[`field_${field.id}`];

    return msg ? <FormattedMessage {...msg} /> : field.id
  }

  renderFields() {
    const { fields, messages } = this.props;
    const { orderBy, order } = this.state;

    return fields.map((field) => (
      <TableCell
        key={field.id}
        align={field.numeric ? 'right' : 'left'}
        // padding={field.disablePadding ? 'none' : 'normal'}
        padding={'none'}
        sortDirection={orderBy === field.id ? order : false}>
        <TableSortLabel
          active={orderBy === field.id}
          direction={orderBy === field.id ? order : 'asc'}
          onClick={this.createSortHandler(field.id)}>
          {this.renderFieldLabel(field)}
        </TableSortLabel>
      </TableCell>
    ))
  }

  render() {
    const { classes, fields } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              // indeterminate={numSelected > 0 && numSelected < rowCount}
              // checked={rowCount > 0 && numSelected === rowCount}
              // onChange={onSelectAllClick}
            />
          </TableCell>
          {this.renderFields(fields)}
        </TableRow>
      </TableHead>
    );
  }
}

export default withStyles(styles)(EnhancedTableHead);
