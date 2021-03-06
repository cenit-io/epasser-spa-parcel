/*
 * Toggle Messages
 *
 * This contains all the text for the Toggle component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Toggle';

export default defineMessages({
  enable: {
    id: `${scope}.enable`,
    defaultMessage: 'Enable',
  },
  disable: {
    id: `${scope}.disable`,
    defaultMessage: 'Disable',
  },
  toggle: {
    id: `${scope}.toggle`,
    defaultMessage: 'Toggle',
  },
});
