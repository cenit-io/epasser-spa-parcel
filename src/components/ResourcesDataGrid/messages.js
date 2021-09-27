/*
 * ResourcesDataGrid Messages
 *
 * This contains all the text for the ResourcesDataGrid component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.ResourcesDataGrid';

export default defineMessages({
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading...',
  },

  withoutData: {
    id: `${scope}.withoutData`,
    defaultMessage: 'No items were found to display here...',
  },
});
