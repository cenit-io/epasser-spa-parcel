/*
 * Variants Messages
 *
 * This contains all the text for the Variants component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Variants';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Variants',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Show the variants of the selected item',
  },
});
