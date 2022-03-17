/**
 *
 * Webhooks/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';

import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from '../../../../components/actions/Reload';
import DeleteAction from '../../../../components/actions/Delete';
import AddAction from '../../../../components/actions/Add';
import EditAction from '../../../../components/actions/Edit';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';

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
      { id: 'topic', format: this.topicFormat },
      { id: 'integration', format: IntegrationFormat },
      { id: 'address' },
      this.columnDateTime('updated_at'),
    ];
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <AddAction moduleId={this.moduleId} onClick={this.onAdd} />
        <EditAction moduleId={this.moduleId} onClick={this.onEdit} />
        <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />
      </>
    );
  }

  topicFormat = (value, row) => row.title;
}

export default withStyles(styles)(List);
