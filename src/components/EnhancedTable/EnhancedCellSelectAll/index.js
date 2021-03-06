/**
 *
 * EnhancedCellSelectAll
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

import styles from '../styles.jss';
import session from '../../../base/session';

import AbstractComponent from '../../AbstractComponent';

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
    this.setMessagingListener('changeSelection', this.onChangeSelection);
  }

  render() {
    const { classes, onChangeSelectAll } = this.props;
    const { selectedCount, itemsCount } = this.state;

    return (
      <TableCell
        className={`${classes.cell} ${classes.cellSelection}`}
        padding={session.iFrameDetected ? 'normal' : 'checkbox'}
      >
        <Checkbox
          indeterminate={selectedCount > 0 && selectedCount < itemsCount}
          checked={itemsCount > 0 && selectedCount === itemsCount}
          onChange={onChangeSelectAll}
        />
      </TableCell>
    );
  }

  onChangeSelection = (selectedItems, items) => {
    this.setState({ selectedCount: selectedItems.length, itemsCount: items.length });
  }
}

export default withStyles(styles)(EnhancedCellSelectAll);
