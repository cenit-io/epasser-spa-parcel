/*
 * ConnectedIntegrations Messages
 *
 * This contains all the text for the ConnectedIntegrations container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from '../../../../components/AbstractPageList/messages';

export const scope = 'containers.pages.ConnectedIntegrations';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Connected Integrations',
  },
  field_channel_title: {
    id: `${scope}.field_channel_title`,
    defaultMessage: 'Channel',
  },
  field_authorized: {
    id: `${scope}.field_authorized`,
    defaultMessage: 'Authorized',
  },
});

export default { ...messagesBase, ...messagesLocal };
