/*
 * SelectBoxLinkVariantsAction Messages
 *
 * This contains all the text for the SelectBoxLinkVariantsAction component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.SelectBoxLinkVariantsAction';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Link variants action',
  },
  none: {
    id: `${scope}.none`,
    defaultMessage: 'Do not link with any of its variants',
  },
  selected: {
    id: `${scope}.selected`,
    defaultMessage: 'Link only selected product integrations with all its variants',
  },
  new: {
    id: `${scope}.new`,
    defaultMessage: 'Link only new product integrations with all its variants',
  },
  all: {
    id: `${scope}.all`,
    defaultMessage: 'Link all product integrations with all its variants',
  },
});
