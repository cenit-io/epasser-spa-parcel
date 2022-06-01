/**
 *
 * Webhooks/Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import settings from './settings';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import CustomSection from '../../../../components/sections/CustomSection';
import ActList from '../../../../components/actions/List';
import UrlBox from '../../../../components/forms/fields/UrlBox';
import SelectBoxTopic from '../../../../components/forms/fields/SelectBoxTopic';
import SelectBoxIntegration from '../../../../components/forms/fields/SelectBoxIntegration';

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
    const integrationId = item.integration ? item.integration.id : '';

    return (
      <CustomSection title={messages.title}>
        <SelectBoxTopic
          name="topic"
          value={item.topic}
          required
          moduleId={this.moduleId}
          className={classes.col3}
          onChange={this.onChange}
        />
        <SelectBoxIntegration
          name="integration_id"
          value={integrationId}
          required
          moduleId={this.moduleId}
          className={classes.col3}
          onChange={this.onChange}
        />
        <UrlBox
          name="address"
          value={item.address}
          required
          moduleId={this.moduleId}
          label={<FormattedMessage {...messages.field_address} />}
          className={classes.col6}
          onChange={this.onChange}
        />
      </CustomSection>
    );
  }

  get actions() {
    return (
      <>
        <ActList moduleId={this.moduleId} onClick={this.onBackToList} />
      </>
    );
  }
}
