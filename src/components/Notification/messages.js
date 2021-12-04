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
  successfulOperation: {
    id: `${scope}.successfulOperation`,
    defaultMessage: 'Successful operation',
  },
  successfulCreation: {
    id: `${scope}.successfulCreation`,
    defaultMessage: 'Successful creation',
  },
  successfulUpdate: {
    id: `${scope}.successfulUpdate`,
    defaultMessage: 'Successful update',
  },
  successfulInstallTask: {
    id: `${scope}.successfulInstallTask`,
    defaultMessage: 'A background task has been created to install of the selected integration.',
  },
  successfulUnInstallTask: {
    id: `${scope}.successfulUnInstallTask`,
    defaultMessage: 'A background task has been created to uninstall of the selected integration.',
  },
});
