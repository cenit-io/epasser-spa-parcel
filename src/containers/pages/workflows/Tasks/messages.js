/*
 * Tasks Messages
 *
 * This contains all the text for the Tasks container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Tasks';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Tasks',
  },
  field_status: {
    id: `${scope}.field_status`,
    defaultMessage: 'Status',
  },
  field_description: {
    id: `${scope}.field_description`,
    defaultMessage: 'Description',
  },
  field_progress: {
    id: `${scope}.field_progress`,
    defaultMessage: 'Progress',
  },
  confirmRetryMsg: {
    id: `${scope}.confirmRetryMsg`,
    defaultMessage: 'Please confirm whether you really want to retry the selected tasks?',
  },
});

export default { ...messagesBase, ...messagesLocal };
