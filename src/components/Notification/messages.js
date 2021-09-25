/*
 * SignIn Messages
 *
 * This contains all the text for the SignIn container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.Notification';

export default defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'WELCOME...',
  },
  gotoSignInPage: {
    id: `${scope}.gotoSignInPage`,
    defaultMessage: 'Redirecting to authentication page...',
  },
  waitFortAuthToken: {
    id: `${scope}.waitFortAuthToken`,
    defaultMessage: 'Waiting for authorization',
  },
});
