/*
 * Orders Messages
 *
 * This contains all the text for the Orders container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Orders';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Orders',
  },
});

export default { ...messagesBase, ...messagesLocal };