/**
 *
 * ConnectedIntegrations/Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedIntegrationsIcon } from "../../../../components/Icons";

import messages from './messages';
import AbstractPageDetails from '../../../../components/AbstractPageDetails';

import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";
import ListAction from "../../../../components/actions/List";

import TextField from '@material-ui/core/TextField';

export default class Details extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'ConnectedIntegrations/Details';
  static icon = ConnectedIntegrationsIcon;
  static messages = messages;
  static apiPath = 'integrations';
  static attrIds = 'integration_ids';

  get form() {
    return (
      <div>
        <TextField label="Filled" variant="outlined" />
        <TextField label="Filled" variant="outlined" />
        <TextField label="Filled" variant="outlined" />
        <TextField label="Filled" variant="outlined" />
      </div>
    )
  }

  get actions() {
    return [
      <ListAction moduleId={this.moduleId} onClick={this.onBackToList} />,
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }
}