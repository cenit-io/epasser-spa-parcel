/**
 *
 * Products/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageList/styles.jss';
import settings from './settings';

import AbstractPageList from '../../../../components/AbstractPageList';
import ActReload from '../../../../components/actions/Reload';
import ActAdd from '../../../../components/actions/Add';
import ActEdit from '../../../../components/actions/Edit';
import ActEditProp from '../../../../components/actions/EditProductProperties';
import ActDelete from '../../../../components/actions/Delete';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
import AvatarProductFormat from '../../../../components/formats/AvatarProductFormat';

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
      { id: 'images', width: 40, label: '', format: AvatarProductFormat },
      { id: 'name' },
      { id: 'price', width: 100, align: 'right' },
      { id: 'variants', width: 100, align: 'right' },
      { id: 'integrations', format: this.integrationsFormat },
    ];
  }

  get actions() {
    return (
      <>
        <ActReload moduleId={this.moduleId} onClick={this.onReload} />
        <ActAdd moduleId={this.moduleId} onClick={this.onAdd} />
        <ActEdit moduleId={this.moduleId} onClick={this.onEdit} title={this.messages.editBasicTitle} />
        <ActEditProp moduleId={this.moduleId} onClick={this.onEditProp} title={this.messages.editPropertiesTitle} />
        <ActDelete moduleId={this.moduleId} onClick={this.onDelete} disabled={this.canNotDelete} />
      </>
    );
  }

  integrationsFormat = (value, row, column) => value.map(
    (integration) => <IntegrationFormat key={integration.id} value={integration} row={row} column={column} />,
  )

  canNotDelete = (items) => items.find((item) => item.integrations.length !== 0) !== undefined

  onEditProp = (e, item) => {
    const moduleId = `${this.moduleBaseId}/EditProp`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }
}

export default withStyles(styles)(List);
