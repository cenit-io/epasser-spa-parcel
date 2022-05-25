/*
 * Edit Messages
 *
 * This contains all the text for the Edit component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Edit';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Edit',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Edit the selected item',
  },
});
