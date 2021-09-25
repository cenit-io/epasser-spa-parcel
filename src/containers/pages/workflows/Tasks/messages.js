/*
 * Tasks Messages
 *
 * This contains all the text for the Tasks container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Tasks';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Tasks',
  },
});

export default { ...messagesBase, ...messagesLocal };