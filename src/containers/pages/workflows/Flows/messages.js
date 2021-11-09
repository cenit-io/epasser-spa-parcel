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
  field_time_frequency: {
    id: `${scope}.field_time_frequency`,
    defaultMessage: 'Time frequency',
  },
  field_time: {
    id: `${scope}.field_time`,
    defaultMessage: 'Time',
  },
  field_start_date: {
    id: `${scope}.field_start_date`,
    defaultMessage: 'Start date',
  },
  field_end_date: {
    id: `${scope}.field_end_date`,
    defaultMessage: 'End date',
  },
});

export default { ...messagesBase, ...messagesLocal };