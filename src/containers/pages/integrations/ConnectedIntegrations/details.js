/**
 *
 * ConnectedIntegrations/Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from "react-intl";

import messages from "./messages";
import settings from './settings';

import FormGroup from "@material-ui/core/FormGroup";

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import ListAction from "../../../../components/actions/List";
import TextBox from "../../../../components/forms/fields/TextBox";
import SelectBoxChannel from "../../../../components/forms/fields/SelectBoxChannel";

export default class Details extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;
  static icon = settings.icon;
  static messages = settings.messages;
  static apiPath = settings.apiPath;

  get form() {
    const { item } = this.state

    return (
      <FormGroup row>
        <TextBox
          name='name'
          value={item.name}
          moduleId={this.moduleId}
          label={<FormattedMessage {...messages.field_name} />}
          onChange={this.onChange} />
        <SelectBoxChannel
          value={item.channel}
          name='channel'
          moduleId={this.moduleId}
          onChange={this.onChange} />
        <TextBox
          name='keys_to_import_brands'
          value={item.keys_to_import_brands}
          moduleId={this.moduleId}
          label={<FormattedMessage {...messages.field_keys_to_import_brands} />}
          onChange={this.onChange} />
      </FormGroup>
    )
  }

  get actions() {
    return [
      <ListAction moduleId={this.moduleId} onClick={this.onBackToList} />,
    ]
  }
}