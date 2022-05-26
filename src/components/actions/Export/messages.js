/*
 * Export Messages
 *
 * This contains all the text for the Export component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Export';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Export',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Export all selected items',
  },
});
