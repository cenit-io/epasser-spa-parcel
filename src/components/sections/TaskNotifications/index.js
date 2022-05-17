/**
 *
 * TaskNotifications
 *
 */

/**
 *
 * TaskNotifications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import styles from './styles.jss';
import messages from './messages';

import AbsSection from '../AbsSection';
import EnhancedTable from '../../EnhancedTable';
import columnDateTime from '../../columns/dateTime';
import NotificationTypeFormat from '../../formats/NotificationTypeFormat';

class TaskNotifications extends AbsSection {
  static propTypes = {
    task: PropTypes.instanceOf(Object).isRequired,
  }

  static messages = messages

  constructor(props) {
    super(props);
    this.setMessagingListener('startLoadItems', this.onStartLoadItems);
  }

  get columns() {
    return [
      { id: 'message', format: NotificationTypeFormat },
      columnDateTime('created_at'),
    ];
  }

  renderContent() {
    return (
      <EnhancedTable
        columns={this.columns}
        moduleId={this.moduleId}
        messages={this.messages}
        multiSelect={false}
        selectable={false}
        limit={5}
      />
    );
  }

  onStartLoadItems = (limit, offset, term) => {
    const { task: { id } } = this.props;

    const options = {
      skipOpenTasksModule: true,
      url: `tasks/${id}/notifications`,
      method: 'GET',
      params: { limit, offset, term },
    };

    this.sendRequest(options).then((response) => {
      this.emitMessage('loadItemsSuccessful', response);
    }).catch((error) => {
      this.emitMessage('loadItemsFailed', error);
    });
  }
}

export default withStyles(styles)(TaskNotifications);
