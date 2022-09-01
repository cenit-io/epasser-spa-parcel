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
  confirm_msg: {
    id: `${scope}.confirm_msg`,
    defaultMessage: 'Please confirm if you really want to toggle the state of the selected items?',
  },
});
