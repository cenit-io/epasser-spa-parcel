/*
 * Link Messages
 *
 * This contains all the text for the Link component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Link';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Link',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Link the selected products with some integrations',
  },
});
