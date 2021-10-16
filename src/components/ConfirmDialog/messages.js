/*
 * ConfirmDialog Messages
 *
 * This contains all the text for the ConfirmDialog component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.ConfirmDialog';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Confirmation:',
  },
  accept: {
    id: `${scope}.accept`,
    defaultMessage: 'Accept',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
});
