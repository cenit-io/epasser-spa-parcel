/**
 *
 * EnhancedCellSelectAll
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles.jss';

import AbstractComponent from "../../AbstractComponent";
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

class EnhancedCellSelectAll extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
    onChangeSelectAll: PropTypes.func.isRequired,
  }

  static defaultProps = { padding: 'normal' };

  constructor(props) {
    super(props);
    this.state.selectedCount = 0;
    this.state.itemsCount = 0;
    this.addMessagingListener('changeSelection', this.onChangeSelection, props.moduleId)
  }

  render() {
    const { classes, onChangeSelectAll } = this.props;
    const { selectedCount, itemsCount } = this.state;

    return (
      <TableCell className={classes.cell} padding="checkbox">
        <Checkbox
          indeterminate={selectedCount > 0 && selectedCount < itemsCount}
          checked={itemsCount > 0 && selectedCount === itemsCount}
          onChange={onChangeSelectAll}
        />
      </TableCell>
    );
  }

  onChangeSelection = (selectedItems, items) => {
    this.setState({ selectedCount: selectedItems.length, itemsCount: items.length })
  }
}

export default withStyles(styles)(EnhancedCellSelectAll);
