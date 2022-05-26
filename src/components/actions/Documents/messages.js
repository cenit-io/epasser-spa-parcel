/*
 * Documents Messages
 *
 * This contains all the text for the Documents component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Documents';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Documents',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Show the documents of the selected item',
  },
});
