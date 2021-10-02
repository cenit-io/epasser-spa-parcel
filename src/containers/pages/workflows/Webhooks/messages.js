/*
 * Webhooks Messages
 *
 * This contains all the text for the Webhooks container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Webhooks';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Webhooks',
  },
  field_topic: {
    id: `${scope}.field_topic`,
    defaultMessage: 'Topic',
  },
  field_address: {
    id: `${scope}.field_address`,
    defaultMessage: 'Address',
  },
});

export default { ...messagesBase, ...messagesLocal };