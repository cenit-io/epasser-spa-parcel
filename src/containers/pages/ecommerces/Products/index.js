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
import ActLink from '../../../../components/actions/Link';
import ActUnLink from '../../../../components/actions/UnLink';
import ActEditProps from '../../../../components/actions/EditProps';
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
    const {
      moduleId: mId,
      messages: { editBasicTitle, editPropsTitle },
    } = this;

    return (
      <>
        <ActReload moduleId={mId} onClick={this.onReload} />
        <ActAdd moduleId={mId} onClick={this.onAdd} />
        <ActEdit moduleId={mId} onClick={this.onEdit} title={editBasicTitle} />
        <ActEditProps
          moduleId={mId}
          onClick={this.onEditProps}
          title={editPropsTitle}
          disabled={this.canNotEditProps}
        />
        <ActLink moduleId={mId} onClick={this.onLink} />
        <ActUnLink moduleId={mId} onClick={this.onUnLink} disabled={this.canNotUnLink} />
        <ActDelete moduleId={mId} onClick={this.onDelete} disabled={this.canNotDelete} />
      </>
    );
  }

  integrationsFormat = (value, row, column) => value.map(
    (integration) => <IntegrationFormat key={integration.id} value={integration} row={row} column={column} />,
  )

  hasSomeIntegrations = (items) => items.some((item) => item.integrations.length !== 0);

  canNotDelete = (items) => this.hasSomeIntegrations(items);

  canNotUnLink = (items) => !this.hasSomeIntegrations(items);

  canNotEditProps = (item) => item.integrations.length === 0;

  onLink = (e, products) => {
    const moduleId = `${this.moduleBaseId}/Link`;
    this.emitMessage('openModule', [moduleId, { products }], 'MainTabs');
  }

  onUnLink = (e, products) => {
    const moduleId = `${this.moduleBaseId}/Unlink`;
    this.emitMessage('openModule', [moduleId, { products }], 'MainTabs');
  }

  onEditProps = (e, item) => {
    const moduleId = `${this.moduleBaseId}/EditProps`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }
}

export default withStyles(styles)(List);
