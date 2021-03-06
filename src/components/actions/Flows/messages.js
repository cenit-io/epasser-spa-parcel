/*
 * Flows Messages
 *
 * This contains all the text for the Flows component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Flows';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Flows',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Shows the flows defined for the selected integration',
  },
});
