/*
 * Themes Messages
 *
 * This contains all the text for the Themes container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.Themes';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Themes',
  },

  field_palette: {
    id: `${scope}.field_palette`,
    defaultMessage: 'Palette',
  },
});

export default { ...messagesBase, ...messagesLocal };
