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
  field_days_of_week: {
    id: `${scope}.field_days_of_week`,
    defaultMessage: 'Days of the week',
  },
  field_weeks_of_month: {
    id: `${scope}.field_weeks_of_month`,
    defaultMessage: 'Weeks of the month',
  },
  field_months_of_year: {
    id: `${scope}.field_months_of_year`,
    defaultMessage: 'Months of the year',
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