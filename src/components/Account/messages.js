/*
 * Account Messages
 *
 * This contains all the text for the Account component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.Account';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Account component!',
  },
  tenant: {
    id: `${scope}.tenant`,
    defaultMessage: 'Tenant',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
});
