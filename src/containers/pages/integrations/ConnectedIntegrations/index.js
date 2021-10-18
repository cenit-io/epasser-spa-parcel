/**
 *
 * ConnectedIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ConnectedIntegrationsIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';

import ReloadAction from "../../../../components/actions/Reload";
import AddAction from "../../../../components/actions/Add";
import EditAction from "../../../../components/actions/Edit";
import DeleteAction from "../../../../components/actions/Delete";

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'ConnectedIntegrations';
  static icon = ConnectedIntegrationsIcon;
  static messages = messages;
  static apiPath = 'integrations';
  static attrIds = 'integration_ids';

  get columns() {
    return [
      this.columnAvatar(),
      { id: 'name' },
      { id: 'channel_title' },
      { id: 'authorized', width: 100, align: 'center', format: this.boolFormat},
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <AddAction moduleId={this.moduleId} onClick={this.onAdd} />,
      <EditAction moduleId={this.moduleId} onClick={this.onEdit} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }
}

export default withStyles(styles)(List);
