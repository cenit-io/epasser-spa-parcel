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
  successful_operation: {
    id: `${scope}.successful_operation`,
    defaultMessage: 'The operation was completed successfully',
  },
  successful_creation: {
    id: `${scope}.successful_creation`,
    defaultMessage: 'The creation was completed successfully',
  },
  successful_update: {
    id: `${scope}.successful_update`,
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
  successful_un_authorize: {
    id: `${scope}.successful_un_authorize`,
    defaultMessage: 'The selected integrations are successfully deauthorized.',
  },
  successfulStart: {
    id: `${scope}.successfulStart`,
    defaultMessage: 'Some background task has been created to start the selected flows.',
  },
  successful_task_creation: {
    id: `${scope}.successful_task_creation`,
    defaultMessage: 'A background task has been created to process the requested action.',
  },
});
