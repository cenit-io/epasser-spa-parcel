/*
 * Start Messages
 *
 * This contains all the text for the Start component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.actions.Start';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Start',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Start the executions of the selected flow',
  },
});
