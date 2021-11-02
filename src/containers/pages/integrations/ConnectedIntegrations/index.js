/**
 *
 * ConnectedIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../../components/AbstractPageList/styles.jss';
import AbstractPageList from '../../../../components/AbstractPageList';

import ReloadAction from "../../../../components/actions/Reload";
import AddAction from "../../../../components/actions/Add";
import EditAction from "../../../../components/actions/Edit";
import DeleteAction from "../../../../components/actions/Delete";
import settings from "./settings";

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;
  static icon = settings.icon;
  static messages = settings.messages;
  static apiPath = settings.apiPath;
  static attrIds = settings.attrIds;

  get columns() {
    return [
      this.columnAvatar(),
      { id: 'name' },
      { id: 'channel_title' },
      { id: 'authorized', width: 100, align: 'center', format: this.boolFormat },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <AddAction moduleId={this.moduleId} onClick={this.onAdd} />,
      <EditAction moduleId={this.moduleId} onClick={this.onEdit} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} disabled={this.canDelete} />,
    ]
  }

  canDelete = (items) => {
    return items.find(item => item.authorized) !== undefined
  }
}

export default withStyles(styles)(List);
