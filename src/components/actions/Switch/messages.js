/*
 * Toggle Messages
 *
 * This contains all the text for the Toggle component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Toggle';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Switch',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Exchange the session with the selected tenant',
  },
});
