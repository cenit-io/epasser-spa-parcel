/*
 * TaskNotifications Messages
 *
 * This contains all the text for the TaskNotifications component.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../AbstractComponent/messages';

export const scope = 'components.TaskNotifications';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Task notifications',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Message',
  },
});

export default { ...messagesBase, ...messagesLocal };
