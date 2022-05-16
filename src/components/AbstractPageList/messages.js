/*
 * AbstractPageList Messages
 *
 * This contains all the text for the AbstractPageList container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../AbstractModule/messages';

export const scope = 'components.AbstractPageList';

const messagesLocal = defineMessages({
  field_scheduler: {
    id: `${scope}.field_scheduler`,
    defaultMessage: 'Scheduler',
  },
});

export default { ...messagesBase, ...messagesLocal };
