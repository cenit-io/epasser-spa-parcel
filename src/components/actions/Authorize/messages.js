/*
 * Authorize Messages
 *
 * This contains all the text for the Authorize component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Authorize';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Authorize',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Authorize the selected item',
  },
});
