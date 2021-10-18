/**
 *
 * Webhooks/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { WebhooksIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Webhooks';
  static icon = WebhooksIcon;
  static messages = messages;
  static apiPath = 'webhooks';
  static attrIds = 'webhooks_ids';

  get columns() {
    return [
      { id: 'topic', format: this.topicFormat },
      { id: 'integration', format: this.integrationFormat },
      { id: 'address' },
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }

  topicFormat = (value, row, column) => row.title;
}

export default withStyles(styles)(List);
