/*
 * Home Messages
 *
 * This contains all the text for the Home container.
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import messagesBase from '../../LeftSlider/messages';

export const scope = 'containers.Home';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Home',
  },
  tenant_not_ready: {
    id: `${scope}.tenant_not_ready`,
    defaultMessage: 'The authenticated tenant is not ready to operate. If you want to use this application,{br}please install Integration-Core in the available integrations module.',
    values: { br: <br /> },
  },
});

export default { ...messagesBase, ...messagesLocal };
