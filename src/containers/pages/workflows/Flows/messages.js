/*
 * Flows Messages
 *
 * This contains all the text for the Flows container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Flows';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Flows',
  },
  field_type: {
    id: `${scope}.field_type`,
    defaultMessage: 'Type',
  },
  field_scheduler: {
    id: `${scope}.field_scheduler`,
    defaultMessage: 'Scheduler',
  },
});

export default { ...messagesBase, ...messagesLocal };