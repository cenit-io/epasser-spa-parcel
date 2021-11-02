/*
 * AbstractPageDetails Messages
 *
 * This contains all the text for the AbstractPageDetails container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../AbstractModule/messages';

export const scope = 'components.AbstractPageDetails';

const messagesLocal = defineMessages({
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
  reset: {
    id: `${scope}.reset`,
    defaultMessage: 'Reset',
  },
});

export default { ...messagesBase, ...messagesLocal };
