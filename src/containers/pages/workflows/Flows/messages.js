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
  toggleScheduler: {
    id: `${scope}.toggleScheduler`,
    defaultMessage: 'Scheduler',
  },
  field_type: {
    id: `${scope}.field_type`,
    defaultMessage: 'Type',
  },
  field_active: {
    id: `${scope}.field_active`,
    defaultMessage: 'Active',
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
  confirmStartMsg: {
    id: `${scope}.confirmStartMsg`,
    defaultMessage: 'Please confirm whether you really want to start processing the selected flows?',
  },
  confirmToggleSchedulerMsg: {
    id: `${scope}.confirmToggleSchedulerMsg`,
    defaultMessage: 'Please confirm whether you really want to toggle the scheduler status for the selected flow?',
  },
});

export default { ...messagesBase, ...messagesLocal };
