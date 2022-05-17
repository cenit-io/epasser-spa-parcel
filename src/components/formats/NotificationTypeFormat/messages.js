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
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Error',
  },
  warning: {
    id: `${scope}.warning`,
    defaultMessage: 'Warning',
  },
  notice: {
    id: `${scope}.notice`,
    defaultMessage: 'Notice',
  },
  info: {
    id: `${scope}.info`,
    defaultMessage: 'Info',
  },
});

export default { ...messagesBase, ...messagesLocal };
