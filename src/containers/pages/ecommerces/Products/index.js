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
import ActDelete from '../../../../components/actions/Delete';
import ActVariants from '../../../../components/actions/Variants';
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
    const { moduleId } = this;

    return (
      <>
        <ActReload moduleId={moduleId} />
        <ActAdd moduleId={moduleId} />
        <ActEdit moduleId={moduleId} />
        <ActVariants moduleId={moduleId} onClick={this.onShowVariants} />
        <ActLink moduleId={moduleId} onClick={this.onLink} />
        <ActUnLink moduleId={moduleId} onClick={this.onUnLink} disabled={this.canNotUnLink} />
        <ActDelete moduleId={moduleId} disabled={this.canNotDelete} />
      </>
    );
  }

  integrationsFormat = (value, row, column) => value.map(
    (integration) => <IntegrationFormat key={integration.id} value={integration} row={row} column={column} />,
  )

  hasSomeIntegrations = (items) => items.some((item) => item.integrations.length !== 0);

  canNotDelete = (items) => this.hasSomeIntegrations(items);

  canNotUnLink = (items) => !this.hasSomeIntegrations(items);

  onLink = (e, products) => {
    const moduleId = `${this.moduleBaseId}/Link`;
    this.emitMessage('openModule', [moduleId, { products }], this.mainModuleId);
  }

  onUnLink = (e, products) => {
    const moduleId = `${this.moduleBaseId}/Unlink`;
    this.emitMessage('openModule', [moduleId, { products }], this.mainModuleId);
  }

  onShowVariants = (e, item) => {
    this.emitMessage('openModule', ['Variants', { productId: item.id }], this.mainModuleId);
  }
}

export default withStyles(styles)(List);
