/*
 * List Messages
 *
 * This contains all the text for the List component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.List';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'List',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Back to the items list',
  },
});
