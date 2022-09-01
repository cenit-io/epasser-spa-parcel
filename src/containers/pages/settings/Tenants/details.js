/**
 *
 * Tenants/Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import FormGroup from '@mui/material/FormGroup';
import messages from './messages';
import settings from './settings';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import ActList from '../../../../components/actions/List';
import TextBox from '../../../../components/forms/fields/TextBox';
import CustomSection from "../../../../components/sections/CustomSection";

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
            pattern={/^[\w.@-]{3,}$/}
            moduleId={this.moduleId}
            className={classes.col6}
            label={<FormattedMessage {...messages.field_name} />}
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
