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
  field_status: {
    id: `${scope}.field_status`,
    defaultMessage: 'Status',
  },
  ready: {
    id: `${scope}.ready`,
    defaultMessage: 'Ready',
  },
  locked: {
    id: `${scope}.locked`,
    defaultMessage: 'Locked',
  },
  not_allowed: {
    id: `${scope}.not_allowed`,
    defaultMessage: 'Not allowed',
  },
  not_installed: {
    id: `${scope}.not_installed`,
    defaultMessage: 'Not installed',
  },
  confirmSwitchMsg: {
    id: `${scope}.confirmSwitchMsg`,
    defaultMessage: 'Please confirm if you really want to switch the session to the selected tenant?',
  },
});

export default { ...messagesBase, ...messagesLocal };
