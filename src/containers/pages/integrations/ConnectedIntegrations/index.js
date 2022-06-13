/**
 *
 * ConnectedIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { signRequest, toQueryParams } from '../../../../base/request';

import styles from '../../../../components/AbstractPageList/styles.jss';
import settings from './settings';
import session from '../../../../base/session';

import AbstractPageList from '../../../../components/AbstractPageList';
import ActReload from '../../../../components/actions/Reload';
import ActAdd from '../../../../components/actions/Add';
import ActEdit from '../../../../components/actions/Edit';
import ActFlows from '../../../../components/actions/Flows';
import ActDelete from '../../../../components/actions/Delete';
import ActAuthorize from '../../../../components/actions/Authorize';
import ActUnAuthorize from '../../../../components/actions/UnAuthorize';
import AvatarFormat from '../../../../components/formats/AvatarFormat';
import BoolFormat from '../../../../components/formats/BoolFormat';
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
      { id: 'icon', width: 40, label: ' ', format: AvatarFormat },
      { id: 'name' },
      { id: 'channel_title' },
      { id: 'authorized', width: 100, align: 'center', format: BoolFormat },
      columnDateTime('created_at'),
      columnDateTime('updated_at'),
    ];
  }

  get actions() {
    return (
      <>
        <ActReload moduleId={this.moduleId} onClick={this.onReload} />
        <ActAdd moduleId={this.moduleId} onClick={this.onAdd} />
        <ActEdit moduleId={this.moduleId} onClick={this.onEdit} />
        <ActDelete moduleId={this.moduleId} onClick={this.onDelete} disabled={this.canNotDelete} />
        <ActAuthorize moduleId={this.moduleId} onClick={this.onAuthorize} />
        <ActUnAuthorize moduleId={this.moduleId} onClick={this.onUnAuthorize} />
        <ActFlows moduleId={this.moduleId} onClick={this.onFlows} disabled={this.canNotStartFlows} />
      </>
    );
  }

  canNotDelete = (items) => items.some((item) => item.authorized)

  canNotStartFlows = (item) => !item.authorized

  onAuthorize = (e, item) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmAuthorizeMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedAuthorize(value, item)];
    this.emitMessage('confirm', data, 'main');
  }

  onUnAuthorize = (e, items) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmUnAuthorizeMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedUnAuthorize(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedAuthorize = (value, item) => {
    if (!value) return;

    const appUri = window.location.href.replace(/\?.*$/, '');
    const path = `${this.apiPath}/${item.id}/authorize`;
    const data = signRequest('GET', path, { redirect_uri: appUri });
    const qs = toQueryParams(data);

    window.location.href = `${session.apiBaseUrl}/${path}?${qs}`;
  }

  onConfirmedUnAuthorize = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/authorize`,
      method: 'DELETE',
      data: this.parseRequestIdentifiers(items),
    }).then(() => {
      this.notify('successfulUnAuthorize');
      this.onReload();
    });
  }

  onFlows = (e, item) => {
    const filters = {
      integration: { attr: 'integration_id', value: item.id, title: item.name },
    };

    session.set('flows-filters', filters);
    this.emitMessage('openModule', 'Flows', this.mainModuleId);
    this.emitMessage('reload', null, 'Flows');
  }
}

export default withStyles(styles)(List);
