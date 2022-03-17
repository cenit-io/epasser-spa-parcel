/*
 * AbstractModule Messages
 *
 * This contains all the text for the Products container.
 */

import React from 'react';
import { defineMessages } from 'react-intl';

export const scope = 'components.AbstractModule';

export default defineMessages({
  confirmDeleteMsg: {
    id: `${scope}.confirmDeleteMsg`,
    defaultMessage: 'Please confirm whether you really want to delete the selected items?',
  },
  confirmOpenTasksModuleMsg: {
    id: `${scope}.confirmOpenTasksModuleMsg`,
    defaultMessage: 'The processed action has generated a background task.{br}Please confirm whether you want to go to the task management module?',
    values: { br: <br /> },
  },
  confirmToggleStateMsg: {
    id: `${scope}.confirmToggleStateMsg`,
    defaultMessage: 'Please confirm whether you really want to toggle the state of the selected items?',
  },
  active: {
    id: `${scope}.active`,
    defaultMessage: 'Active',
  },
  disabled: {
    id: `${scope}.disabled`,
    defaultMessage: 'Disabled',
  },
  field_id: {
    id: `${scope}.field_id`,
    defaultMessage: 'Id',
  },
  field_icon: {
    id: `${scope}.field_icon`,
    defaultMessage: '-',
  },
  field_name: {
    id: `${scope}.field_name`,
    defaultMessage: 'Name',
  },
  field_namespace: {
    id: `${scope}.field_namespace`,
    defaultMessage: 'App. Namespace',
  },
  field_integration: {
    id: `${scope}.field_integration`,
    defaultMessage: 'Integration',
  },
  field_method: {
    id: `${scope}.field_method`,
    defaultMessage: 'Method',
  },
  field_path: {
    id: `${scope}.field_path`,
    defaultMessage: 'Path',
  },
  field_title: {
    id: `${scope}.field_title`,
    defaultMessage: 'Title',
  },
  field_description: {
    id: `${scope}.field_description`,
    defaultMessage: 'Description',
  },
  field_created_at: {
    id: `${scope}.field_created_at`,
    defaultMessage: 'Created at',
  },
  field_updated_at: {
    id: `${scope}.field_updated_at`,
    defaultMessage: 'Updated at',
  },
  field_value: {
    id: `${scope}.field_value`,
    defaultMessage: 'Value',
  },
  field_type: {
    id: `${scope}.field_type`,
    defaultMessage: 'Type',
  },
});
