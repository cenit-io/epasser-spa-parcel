/*
 * About Messages
 *
 * This contains all the text for the About component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.About';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Automate multichannel selling',
  },
  content: {
    id: `${scope}.content`,
    defaultMessage: 'Manage multiple sales channels efficiently with ePasser. Integrated with leading e-commerce marketplaces, everything is just one click away.',
  },
});
