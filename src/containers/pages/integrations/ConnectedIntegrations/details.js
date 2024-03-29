/**
 *
 * ConnectedIntegrations/Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import FormGroup from '@mui/material/FormGroup';
import messages from './messages';
import settings from './settings';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import CustomSection from '../../../../components/sections/CustomSection';
import ActList from '../../../../components/actions/List';
import TextBox from '../../../../components/forms/fields/TextBox';
import SelectBoxChannel from '../../../../components/forms/fields/SelectBoxChannel';

export default class Details extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  static apiPath = settings.apiPath;

  get form() {
    const { classes } = this.props;
    const { item } = this.state;

    return (
      <CustomSection title={messages.title}>
        <FormGroup row>
          <TextBox
            name="name"
            value={item.name}
            required
            pattern={/^[\w-]+( [\w-]+)*$/}
            moduleId={this.moduleId}
            className={classes.col2}
            label={<FormattedMessage {...messages.field_name} />}
            onChange={this.onChange}
          />
          <SelectBoxChannel
            name="channel"
            value={item.channel}
            required
            moduleId={this.moduleId}
            className={classes.col2}
            readOnly={this.isEdit}
            onChange={this.onChange}
          />
          <TextBox
            name="keys_to_import_brands"
            value={item.keys_to_import_brands}
            moduleId={this.moduleId}
            className={classes.col2}
            label={<FormattedMessage {...messages.field_keys_to_import_brands} />}
            onChange={this.onChange}
          />
        </FormGroup>
      </CustomSection>
    );
  }

  get actions() {
    const { moduleId } = this;

    return (
      <>
        <ActList moduleId={moduleId} />
      </>
    );
  }
}
