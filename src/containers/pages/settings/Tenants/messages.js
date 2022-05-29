/*
 * Tenants Messages
 *
 * This contains all the text for the Tenants container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Tenants';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Tenants',
  },
  field_user: {
    id: `${scope}.field_user`,
    defaultMessage: 'User',
  },
  field_is_ready: {
    id: `${scope}.field_is_ready`,
    defaultMessage: 'Is ready',
  },
  confirmSwitchMsg: {
    id: `${scope}.confirmSwitchMsg`,
    defaultMessage: 'Please confirm if you really want to switch the session to the selected tenant?',
  },
});

export default { ...messagesBase, ...messagesLocal };
