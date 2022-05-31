/*
 * ThemeMode Messages
 *
 * This contains all the text for the ThemeMode component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.ThemeMode';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Dark / Light',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Switch the theme mode',
  },
});
