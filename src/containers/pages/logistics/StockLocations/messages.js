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
  field_country: {
    id: `${scope}.field_country`,
    defaultMessage: 'Country',
  },
  field_state: {
    id: `${scope}.field_state`,
    defaultMessage: 'State',
  },
  field_city: {
    id: `${scope}.field_city`,
    defaultMessage: 'City',
  },
  field_zip_code: {
    id: `${scope}.field_zip_code`,
    defaultMessage: 'Zip-Code',
  },
  field_phone: {
    id: `${scope}.field_phone`,
    defaultMessage: 'Phone',
  },
});

export default { ...messagesBase, ...messagesLocal };