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
  field_product: {
    id: `${scope}.field_product`,
    defaultMessage: 'Product',
  },
  field_sku: {
    id: `${scope}.field_sku`,
    defaultMessage: 'Sku',
  },
  field_count_on_hand: {
    id: `${scope}.field_count_on_hand`,
    defaultMessage: 'Count on hand',
  },
  field_stock_location: {
    id: `${scope}.field_stock_location`,
    defaultMessage: 'Stock location',
  },
});

export default { ...messagesBase, ...messagesLocal };