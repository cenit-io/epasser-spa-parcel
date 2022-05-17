/*
 * AbstractComponent Messages
 *
 * This contains all the text for the BaseConnectorForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.AbstractComponent';

export default defineMessages({
  status: {
    id: `${scope}.field_status`,
    defaultMessage: 'Status',
  },
  created_at: {
    id: `${scope}.field_created_at`,
    defaultMessage: 'Created at',
  },
  updated_at: {
    id: `${scope}.field_updated_at`,
    defaultMessage: 'Updated at',
  },
});
