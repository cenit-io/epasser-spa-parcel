/*
 * Import Messages
 *
 * This contains all the text for the Import component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Import';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Import',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Re-import all selected items',
  },
});
