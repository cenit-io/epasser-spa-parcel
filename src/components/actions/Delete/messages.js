/*
 * Delete Messages
 *
 * This contains all the text for the Delete component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Delete';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Delete',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Delete all selected items',
  },
  confirm_msg: {
    id: `${scope}.confirm_msg`,
    defaultMessage: 'Please confirm if you really want to delete the selected items?',
  },
});
