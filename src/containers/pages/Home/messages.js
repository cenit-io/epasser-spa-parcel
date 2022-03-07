/*
 * Home Messages
 *
 * This contains all the text for the Home container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../LeftSlider/messages';

export const scope = 'containers.Home';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Home',
  },
});

export default { ...messagesBase, ...messagesLocal };
