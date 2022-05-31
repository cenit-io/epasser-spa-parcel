/*
 * EditProps Messages
 *
 * This contains all the text for the EditProps component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.EditProps';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Properties',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Edit the properties of the selected item',
  },
});
