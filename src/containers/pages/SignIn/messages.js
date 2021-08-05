/*
 * SignIn Messages
 *
 * This contains all the text for the SignIn container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.SignIn';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Automate multichannel selling',
  },
  content: {
    id: `${scope}.content`,
    defaultMessage: 'Manage multiple sales channels efficiently with OMNA. Integrated with leading e-commerce marketplaces, everything is just one click away.',
  },
  waitFortAuthToken: {
    id: `${scope}.waitFortAuthToken`,
    defaultMessage: 'Waiting for Authorization',
  },
});

