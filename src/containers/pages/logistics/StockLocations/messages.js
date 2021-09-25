/*
 * StockLocations Messages
 *
 * This contains all the text for the StockLocations container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.StockLocations';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Stock Locations',
  },
});

export default { ...messagesBase, ...messagesLocal };