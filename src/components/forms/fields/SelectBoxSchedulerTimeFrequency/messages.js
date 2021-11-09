/*
 * SelectBoxSchedulerTimeFrequency Messages
 *
 * This contains all the text for the SelectBoxSchedulerTimeFrequency component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.SelectBoxSchedulerTimeFrequency';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Time frequency',
  },
  appointed: {
    id: `${scope}.appointed`,
    defaultMessage: 'Appointed',
  },
  minutes: {
    id: `${scope}.minutes`,
    defaultMessage: 'Minutes',
  },
  hours: {
    id: `${scope}.hours`,
    defaultMessage: 'Hours',
  },
  days: {
    id: `${scope}.days`,
    defaultMessage: 'Days',
  },
  weeks: {
    id: `${scope}.weeks`,
    defaultMessage: 'Weeks',
  },
  months: {
    id: `${scope}.months`,
    defaultMessage: 'Months',
  },
});
