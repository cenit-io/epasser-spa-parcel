/*
 * Flows Messages
 *
 * This contains all the text for the Flows container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Flows';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Flows',
  },
});

export default { ...messagesBase, ...messagesLocal };