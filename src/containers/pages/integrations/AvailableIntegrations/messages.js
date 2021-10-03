/*
 * AvailableIntegrations Messages
 *
 * This contains all the text for the AvailableIntegrations container.
 */

import { defineMessages } from 'react-intl';
import messagesBase from "../../../../components/AbstractPageList/messages";

export const scope = 'containers.pages.AvailableIntegrations';

const messagesLocal = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Available Integrations',
  },

  field_title: {
    id: `${scope}.field_title`,
    defaultMessage: 'Title',
  },

  field_summary: {
    id: `${scope}.field_summary`,
    defaultMessage: 'Summary',
  },

  field_version: {
    id: `${scope}.field_version`,
    defaultMessage: 'Version',
  },

  field_status: {
    id: `${scope}.field_status`,
    defaultMessage: 'Status',
  },

  field_updated_at: {
    id: `${scope}.field_updated_at`,
    defaultMessage: 'Updated at',
  },

  field_installed_at: {
    id: `${scope}.field_installed_at`,
    defaultMessage: 'Installed at',
  },

});

export default { ...messagesBase, ...messagesLocal };
