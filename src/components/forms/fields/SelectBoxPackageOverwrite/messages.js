/*
 * SelectBoxPackageOverwrite Messages
 *
 * This contains all the text for the SelectBoxPackageOverwrite component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.SelectBoxPackageOverwrite';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Overwrite Package',
  },
  do_not_overwrite: {
    id: `${scope}.do_not_overwrite`,
    defaultMessage: 'Do not overwrite the package information in any variant',
  },
  do_overwrite: {
    id: `${scope}.do_overwrite`,
    defaultMessage: 'Do overwrite package information in all variants',
  },
});
