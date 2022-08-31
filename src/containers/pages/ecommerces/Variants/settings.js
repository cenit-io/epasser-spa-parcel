/**
 *
 * Variants/settings
 *
 */

import { VariantsIcon } from '../../../../components/Icons';

import messages from './messages';

export default {
  id: 'Variants',
  icon: VariantsIcon,
  apiPath: 'products/{product_id}/variants',
  attrIds: 'variant_ids',
  messages,
};
