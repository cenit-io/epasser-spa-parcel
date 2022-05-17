/*
 * TaskExecutions Messages
 *
 * This contains all the text for the TaskExecutions component.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../AbstractComponent/messages';

export const scope = 'components.TaskExecutions';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Task executions',
  },
  started_at: {
    id: `${scope}.field_started_at`,
    defaultMessage: 'Started at',
  },
  completed_at: {
    id: `${scope}.field_completed_at`,
    defaultMessage: 'Completed at',
  },
});

export default { ...messagesBase, ...messagesLocal };
