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
    defaultMessage: 'REDIRECTING TO AUTHENTICATION PAGE...',
  },
  waitFortAuthToken: {
    id: `${scope}.waitFortAuthToken`,
    defaultMessage: 'Waiting for Authorization',
  },
});
