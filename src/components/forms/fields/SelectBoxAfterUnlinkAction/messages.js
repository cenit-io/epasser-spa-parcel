/*
 * SelectBoxAfterUnlinkAction Messages
 *
 * This contains all the text for the SelectBoxAfterUnlinkAction component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.SelectBoxAfterUnlinkAction';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Link variants action',
  },
  no_delete_from_integration: {
    id: `${scope}.no_delete_from_integration`,
    defaultMessage: 'Do not remove from remote platforms',
  },
  delete_from_integration: {
    id: `${scope}.delete_from_integration`,
    defaultMessage: 'Remove from the remote platforms',
  },
});
