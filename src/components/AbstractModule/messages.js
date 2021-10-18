/*
 * AbstractModule Messages
 *
 * This contains all the text for the Products container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.AbstractModule';

export default defineMessages({
  confirmDeleteMsg: {
    id: `${scope}.confirmDeleteMsg`,
    defaultMessage: 'Confirm if you really want to delete the selected items?',
  },
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
  field_integration: {
    id: `${scope}.field_integration`,
    defaultMessage: 'Integration',
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
