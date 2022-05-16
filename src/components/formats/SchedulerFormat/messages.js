/*
 * EnhancedTable Messages
 *
 * This contains all the text for the EnhancedTable component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.EnhancedTable';

export default defineMessages({
  activated: {
    id: `${scope}.activated`,
    defaultMessage: 'Activated',
  },

  disabled: {
    id: `${scope}.disabled`,
    defaultMessage: 'Disabled',
  },

  indeterminate: {
    id: `${scope}.indeterminate`,
    defaultMessage: 'Indeterminate',
  },
});
