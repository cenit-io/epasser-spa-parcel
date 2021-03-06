/*
 * CleanFilters Messages
 *
 * This contains all the text for the CleanFilters component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.CleanFilters';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Filters',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Clear all applied filters in this module',
  },
});
