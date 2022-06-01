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
import ActReload from '../../../../components/actions/Reload';
import ActDelete from '../../../../components/actions/Delete';
import ActAdd from '../../../../components/actions/Add';
import ActEdit from '../../../../components/actions/Edit';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
import columnDateTime from '../../../../components/columns/dateTime';

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
      columnDateTime('updated_at'),
    ];
  }

  get actions() {
    return (
      <>
        <ActReload moduleId={this.moduleId} onClick={this.onReload} />
        <ActAdd moduleId={this.moduleId} onClick={this.onAdd} />
        <ActEdit moduleId={this.moduleId} onClick={this.onEdit} />
        <ActDelete moduleId={this.moduleId} onClick={this.onDelete} />
      </>
    );
  }

  topicFormat = (value, row) => row.title;
}

export default withStyles(styles)(List);
