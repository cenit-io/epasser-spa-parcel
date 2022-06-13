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
  title_for_link: {
    id: `${scope}.title_for_link`,
    defaultMessage: 'Linking products and integrations',
  },
  title_for_unlink: {
    id: `${scope}.title_for_unlink`,
    defaultMessage: 'Unlinking products and integrations',
  },
  basic: {
    id: `${scope}.basic`,
    defaultMessage: 'Basic info',
  },
  package: {
    id: `${scope}.package`,
    defaultMessage: 'Package info',
  },
  properties: {
    id: `${scope}.properties`,
    defaultMessage: 'Properties info',
  },
  link_up: {
    id: `${scope}.link_up`,
    defaultMessage: 'Link up',
  },
  unlink: {
    id: `${scope}.unlink`,
    defaultMessage: 'Unlink',
  },
  editBasicLabel: {
    id: `${scope}.editBasicLabel`,
    defaultMessage: 'Basic',
  },
  editBasicTitle: {
    id: `${scope}.editBasicTitle`,
    defaultMessage: 'Edit the basic attributes of the selected item',
  },
  editPropsTitle: {
    id: `${scope}.editPropsTitle`,
    defaultMessage: 'Edit the specific properties of the selected item in each of its associated integrations',
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
  field_description: {
    id: `${scope}.field_description`,
    defaultMessage: 'Description',
  },
  field_weight: {
    id: `${scope}.field_weight`,
    defaultMessage: 'Weight',
  },
  field_height: {
    id: `${scope}.field_height`,
    defaultMessage: 'Height',
  },
  field_length: {
    id: `${scope}.field_length`,
    defaultMessage: 'Length',
  },
  field_width: {
    id: `${scope}.field_width`,
    defaultMessage: 'Width',
  },
  field_content: {
    id: `${scope}.field_content`,
    defaultMessage: 'Content',
  },
  field_images: {
    id: `${scope}.field_images`,
    defaultMessage: 'Images',
  },
  field_products: {
    id: `${scope}.field_products`,
    defaultMessage: 'Products',
  },
});

export default { ...messagesBase, ...messagesLocal };
