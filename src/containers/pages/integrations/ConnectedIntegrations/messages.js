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
  field_keys_to_import_brands: {
    id: `${scope}.field_keys_to_import_brands`,
    defaultMessage: 'Brands import filter',
  },
  confirmAuthorizeMsg: {
    id: `${scope}.confirmAuthorizeMsg`,
    defaultMessage: 'Please confirm whether you really want to authorize the selected integration?',
  },
  confirmUnAuthorizeMsg: {
    id: `${scope}.confirmUnAuthorizeMsg`,
    defaultMessage: 'Please confirm whether you really want to cancel the authorizations for the selected integrations?',
  },
});

export default { ...messagesBase, ...messagesLocal };
