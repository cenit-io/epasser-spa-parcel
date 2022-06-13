/*
 * UnLink Messages
 *
 * This contains all the text for the UnLink component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.UnLink';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Unlink',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Unlink the selected products from some integrations',
  },
});
