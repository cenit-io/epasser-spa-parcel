/*
 * Loading Messages
 *
 * This contains all the text for the Loading component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.Loading';

export default defineMessages({
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Dynamic loading of the module or some of its components failed.',
  },
  timeout: {
    id: `${scope}.time_out`,
    defaultMessage: 'Dynamic loading of the module or some of its components failed due to timeout.',
  },
});
