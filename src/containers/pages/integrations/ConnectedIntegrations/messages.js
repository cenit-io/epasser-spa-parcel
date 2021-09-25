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
});

export default { ...messagesBase, ...messagesLocal };
