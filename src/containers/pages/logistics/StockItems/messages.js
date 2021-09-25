/*
 * StockItems Messages
 *
 * This contains all the text for the StockItems container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.StockItems';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Stock Items',
  },
});

export default { ...messagesBase, ...messagesLocal };