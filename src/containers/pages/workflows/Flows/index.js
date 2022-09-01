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
    const { moduleId } = this;

    return (
      <>
        <ActReload moduleId={moduleId} />
        <ActAdd moduleId={moduleId} />
        <ActEdit moduleId={moduleId} />
        <ActDelete moduleId={moduleId} />
        <ActStart moduleId={moduleId} onClick={this.onStart} />
        <ActToggle
          moduleId={moduleId}
          confirmMsg={this.messages.confirm_toggle_scheduler_msg}
          label={this.messages.toggle_scheduler}
          multiSelection={false}
          onConfirmedAction={this.onConfirmedToggleScheduler}
        />
        <ActCleanFilters moduleId={moduleId} onClick={this.onCleanFilters} disabled={this.canNotCleanFilters} />
      </>
    );
  }

  typeFormat = (value, row) => row.title;

  canNotCleanFilters = () => !session.get('flows-filters')

  onStart = (e, items) => {
    const confirmMsg = <FormattedMessage {...this.messages.confirmStartMsg} />;
    const data = [confirmMsg, (value) => this.onConfirmedStart(value, items)];
    this.emitMessage('confirm', data, this.mainModuleId);
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

  onConfirmedToggleScheduler = (items) => {
    this.sendRequest({
      url: `${this.apiPath}/${items[0].id}/toggle/scheduler/status`,
      method: 'POST',
    }).then(() => {
      this.notify('successful_operation');
      this.emitMessage('reload');
    });
  }

  onCleanFilters = () => {
    session.del('flows-filters');
    this.emitMessage('reload');
  }
}

export default withStyles(styles)(List);
