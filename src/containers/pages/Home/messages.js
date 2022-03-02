/*
 * Home Messages
 *
 * This contains all the text for the Home container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.Home';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Home',
  },
  integrations: {
    id: `${scope}.integrations`,
    defaultMessage: 'Integrations',
  },
  logistics: {
    id: `${scope}.logistics`,
    defaultMessage: 'Logistics',
  },
  workflows: {
    id: `${scope}.workflows`,
    defaultMessage: 'Workflows',
  },
});
