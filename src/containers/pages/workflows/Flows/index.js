/**
 *
 * Flows/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import settings from './settings';
import styles from '../../../../components/AbstractPageList/styles.jss';
import session from '../../../../base/session';

import AbstractPageList from '../../../../components/AbstractPageList';
import ActReload from '../../../../components/actions/Reload';
import ActDelete from '../../../../components/actions/Delete';
import ActAdd from '../../../../components/actions/Add';
import ActEdit from '../../../../components/actions/Edit';
import ActStart from '../../../../components/actions/Start';
import ActToggle from '../../../../components/actions/Toggle';
import ActCleanFilters from '../../../../components/actions/CleanFilters';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';
import SchedulerFormat from '../../../../components/formats/SchedulerFormat';
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

  get baseParams() {
    const filters = session.get('flows-filters', {});
    const baseParams = {};

    if (filters) {
      Object.values(filters).forEach((filter) => {
        baseParams[filter.attr] = filter.value;
      });
    }

    return baseParams;
  }

  get columns() {
    return [
      { id: 'type', format: this.typeFormat },
      { id: 'integration', format: IntegrationFormat },
      { id: 'scheduler', width: 100, align: 'center', format: SchedulerFormat },
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
        <ActStart moduleId={this.moduleId} onClick={this.onStart} />
        <ActToggle moduleId={this.moduleId} onClick={this.onToggleScheduler} label={this.toggleSchedulerLabel} />
        <ActCleanFilters moduleId={this.moduleId} onClick={this.onCleanFilters} disabled={this.canNotCleanFilters} />
      </>
    );
  }

  get toggleSchedulerLabel() {
    return <FormattedMessage {...this.messages.toggleScheduler} />;
  }

  typeFormat = (value, row) => row.title;

  canNotCleanFilters = () => !session.get('flows-filters')

  onStart = (e, items) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmStartMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedStart(value, items)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedStart = (value, items) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/start`,
      method: 'POST',
      data: this.parseRequestIdentifiers(items),
    }).then(() => {
      this.notify('successfulStart', 'warning');
    });
  }

  onToggleScheduler = (e, item) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmToggleSchedulerMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedToggleScheduler(value, item)];
    this.emitMessage('confirm', data, 'main');
  }

  onConfirmedToggleScheduler = (value, item) => {
    if (!value) return;

    this.sendRequest({
      url: `${this.apiPath}/${item.id}/toggle/scheduler/status`,
      method: 'POST',
    }).then(() => {
      this.notify('successfulOperation');
      this.onReload();
    });
  }

  onCleanFilters = () => {
    session.del('flows-filters');
    this.onReload();
  }
}

export default withStyles(styles)(List);
