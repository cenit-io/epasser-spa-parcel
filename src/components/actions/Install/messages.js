/*
 * Install Messages
 *
 * This contains all the text for the Install component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Install';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Install',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Start installation process of the selected item',
  },
});
