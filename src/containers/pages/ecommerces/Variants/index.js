/**
 *
 * Variants/List
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
    productId: PropTypes.string.isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  static attrIds = settings.attrIds;

  get apiPath() {
    return `products/${this.props.productId}/variants`;
  }

  get columns() {
    return [
      { id: 'images', width: 40, label: '', format: AvatarProductFormat },
      { id: 'name' },
      { id: 'price', width: 100, align: 'right' },
      { id: 'integrations', format: this.integrationsFormat },
    ];
  }

  get actions() {
    const { moduleId, props: { productId } } = this;

    return (
      <>
        <ActReload moduleId={moduleId} />
        <ActAdd moduleId={moduleId} withProps={{ productId }} />
        <ActEdit moduleId={moduleId} withProps={{ productId }} />
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

  canNotEditProps = (item) => item.integrations.length === 0;

  onLink = (e, variants) => {
    const moduleId = `${this.moduleBaseId}/Link`;
    this.emitMessage('openModule', [moduleId, { variants }], this.mainModuleId);
  }

  onUnLink = (e, variants) => {
    const moduleId = `${this.moduleBaseId}/Unlink`;
    this.emitMessage('openModule', [moduleId, { variants }], this.mainModuleId);
  }

  onEditProps = (e, item) => {
    const moduleId = `${this.moduleBaseId}/EditProps`;
    this.emitMessage('openModule', [moduleId, { item }], this.mainModuleId);
  }
}

export default withStyles(styles)(List);
