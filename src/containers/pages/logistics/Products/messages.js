/*
 * Products Messages
 *
 * This contains all the text for the Products container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Products';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Products',
  },
  field_price: {
    id: `${scope}.field_price`,
    defaultMessage: 'Price',
  },
  field_variants: {
    id: `${scope}.field_variants`,
    defaultMessage: 'Variants',
  },
  field_integrations: {
    id: `${scope}.field_integrations`,
    defaultMessage: 'Integrations',
  },
});

export default { ...messagesBase, ...messagesLocal };
