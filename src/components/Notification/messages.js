/*
 * Notification Messages
 *
 * This contains all the text for the Notification component.
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
    defaultMessage: 'The operation was completed successfully',
  },
  successfulCreation: {
    id: `${scope}.successfulCreation`,
    defaultMessage: 'The creation was completed successfully',
  },
  successfulUpdate: {
    id: `${scope}.successfulUpdate`,
    defaultMessage: 'The update was completed successfully',
  },
  warningInstallTask: {
    id: `${scope}.successfulInstallTask`,
    defaultMessage: 'A background task has been created to install of the selected integration.',
  },
  warningUnInstallTask: {
    id: `${scope}.successfulUnInstallTask`,
    defaultMessage: 'A background task has been created to uninstall of the selected integration.',
  },
  successfulUnAuthorize: {
    id: `${scope}.successfulUnAuthorize`,
    defaultMessage: 'The selected integrations are successfully deauthorized.',
  },
  successfulStart: {
    id: `${scope}.successfulStart`,
    defaultMessage: 'Some background task has been created to start the selected flows.',
  },
  successfulTaskCreation: {
    id: `${scope}.successfulTaskCreation`,
    defaultMessage: 'A background task has been created to process the requested action.',
  },
});
