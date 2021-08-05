/*
 * NotFound Messages
 *
 * This contains all the text for the NotFound container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.NotFound';

export default defineMessages({
  msg: {
    id: `${scope}.msg`,
    defaultMessage: 'Sorry, the page you requested was not found!',
  },
});
