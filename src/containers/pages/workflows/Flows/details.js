/**
 *
 * Flows/Details
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
import SelectBoxFlowType from "../../../../components/forms/fields/SelectBoxFlowType";
import SelectBoxIntegration from "../../../../components/forms/fields/SelectBoxIntegration";

export default class Details extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;
  static icon = settings.icon;
  static messages = settings.messages;
  static apiPath = settings.apiPath;

  get form() {
    const { classes } = this.props
    const { item } = this.state
    const integration_id = item.integration ? item.integration.id : ''

    return (
      <FormGroup row>
        <SelectBoxFlowType
          value={item.type}
          name='type'
          moduleId={this.moduleId}
          className={classes.col3}
          readOnly={this.isEdit}
          onChange={this.onChange} />
        <SelectBoxIntegration
          value={integration_id}
          name='integration_id'
          moduleId={this.moduleId}
          className={classes.col3}
          readOnly={this.isEdit}
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