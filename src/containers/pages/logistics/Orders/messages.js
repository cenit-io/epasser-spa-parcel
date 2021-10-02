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
  field_number: {
    id: `${scope}.field_number`,
    defaultMessage: 'Number',
  },
  field_total_price: {
    id: `${scope}.field_total_price`,
    defaultMessage: 'Total price',
  },
  field_total_quantity: {
    id: `${scope}.field_total_quantity`,
    defaultMessage: 'Total quantity',
  },
  field_status: {
    id: `${scope}.field_status`,
    defaultMessage: 'Status',
  },
});

export default { ...messagesBase, ...messagesLocal };