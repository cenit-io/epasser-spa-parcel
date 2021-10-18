/**
 *
 * Tasks/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TasksIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';

import Typography from '@material-ui/core/Typography';
import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Tasks';
  static icon = TasksIcon;
  static messages = messages;
  static apiPath = 'tasks';
  static attrIds = 'tasks_ids';

  get columns() {
    return [
      { id: 'status', width: 120, format: this.statusFormat },
      { id: 'progress', align: 'center', width: 100 },
      { id: 'description' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }

  statusFormat = (value, row, column) => {
    let color = 'inherit';

    if (/pending/i.test(value)) {
      color = 'inherit';
    } else if (/running|paused/i.test(value)) {
      color = 'secondary';
    } else if (/failed|broked/i.test(value)) {
      color = 'error';
    } else if (/completed/i.test(value)) {
      color = 'primary';
    }

    return <Typography color={color} variant="body2">{value}</Typography>
  }
}

export default withStyles(styles)(List);
