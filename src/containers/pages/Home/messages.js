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
    defaultMessage: 'Ecommerce Connector',
  },
  tenant_not_installed: {
    id: `${scope}.tenant_not_installed`,
    defaultMessage: 'The authenticated tenant is not ready to operate. If you want to use this application,{br}please install Integration-Core in the available integrations module.',
    values: { br: <br /> },
  },
  tenant_invalid: {
    id: `${scope}.tenant_invalid`,
    defaultMessage: 'The authenticated tenant is not valid to operate.{br}Please switch to other tenant.',
    values: { br: <br /> },
  },
  locked: {
    id: `${scope}.locked`,
    defaultMessage: 'The authenticated tenant is locket.{br}Please unlock it or switch to other tenant.',
    values: { br: <br /> },
  },
});

export default { ...messagesBase, ...messagesLocal };
