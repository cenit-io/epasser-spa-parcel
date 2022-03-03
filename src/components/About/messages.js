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
    defaultMessage: 'Manage multiple management systems efficiently with ePasser. Integrated with leading eCommerce marketplaces and management systems, everything is just a click away.',
  },
});
