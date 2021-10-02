/*
 * Products Messages
 *
 * This contains all the text for the Products container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.AbstractPageList';

export default defineMessages({
  field_id: {
    id: `${scope}.field_id`,
    defaultMessage: 'Id',
  },
  field_icon: {
    id: `${scope}.field_icon`,
    defaultMessage: '-',
  },
  field_name: {
    id: `${scope}.field_name`,
    defaultMessage: 'Name',
  },
  field_created_at: {
    id: `${scope}.field_created_at`,
    defaultMessage: 'Created at',
  },
  field_updated_at: {
    id: `${scope}.field_updated_at`,
    defaultMessage: 'Updated at',
  },
});
