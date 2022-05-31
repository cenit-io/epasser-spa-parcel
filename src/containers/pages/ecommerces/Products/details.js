/**
 *
 * Products/Details
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
import NumberBox from '../../../../components/forms/fields/NumberBox';
import SelectBoxPackageOverwrite from '../../../../components/forms/fields/SelectBoxPackageOverwrite';

export default class Details extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  static apiPath = settings.apiPath;

  get requestData() {
    const { item: { name, price, description, package: pk } } = this.state;
    const { weight, height, length, width, content } = pk;
    const data = {
      name,
      price,
      description,
      package: {
        weight, height, length, width, content,
      },
    };

    if (this.isEdit) data.package.overwrite = pk.overwrite;

    return data;
  }

  parsePkValue(value, defaultValue = 10) {
    if (value === null || value === undefined) return defaultValue;
    // eslint-disable-next-line radix
    return parseInt(value);
  }

  get form() {
    const { classes } = this.props;
    const { item: { name, price, description, package: pk = {} } } = this.state;

    return (
      <>
        <CustomSection title={messages.basic}>
          <FormGroup row>
            <TextBox
              name="name"
              value={name}
              required
              moduleId={this.moduleId}
              className={classes.col4}
              label={<FormattedMessage {...messages.field_name} />}
              onChange={this.onChange}
            />
            <NumberBox
              name="price"
              value={price || 0}
              min={0}
              required
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_price} />}
              onChange={this.onChange}
            />
            <TextBox
              name="description"
              value={description}
              required
              moduleId={this.moduleId}
              multiline
              rows={5}
              className={classes.col6}
              label={<FormattedMessage {...messages.field_description} />}
              onChange={this.onChange}
            />
          </FormGroup>
        </CustomSection>

        <CustomSection title={messages.package}>
          <FormGroup row>
            <FormGroup className={classes.col2}>
              <NumberBox
                name="package.weight"
                value={this.parsePkValue(pk.weight)}
                min={10}
                required
                moduleId={this.moduleId}
                className={classes.col6}
                label={<FormattedMessage {...messages.field_weight} />}
                onChange={this.onChange}
              />
              <NumberBox
                name="package.height"
                value={this.parsePkValue(pk.height)}
                min={10}
                required
                moduleId={this.moduleId}
                className={classes.col6}
                label={<FormattedMessage {...messages.field_height} />}
                onChange={this.onChange}
              />
              <NumberBox
                name="package.length"
                value={this.parsePkValue(pk.length)}
                min={10}
                moduleId={this.moduleId}
                required
                className={classes.col6}
                label={<FormattedMessage {...messages.field_length} />}
                onChange={this.onChange}
              />
              <NumberBox
                name="package.width"
                value={this.parsePkValue(pk.width)}
                min={10}
                moduleId={this.moduleId}
                required
                className={classes.col6}
                label={<FormattedMessage {...messages.field_width} />}
                onChange={this.onChange}
              />
            </FormGroup>
            <TextBox
              name="package.content"
              value={pk.content}
              multiline
              moduleId={this.moduleId}
              className={classes.col4}
              label={<FormattedMessage {...messages.field_content} />}
              onChange={this.onChange}
            />
          </FormGroup>
          {
            this.isEdit && (
              <SelectBoxPackageOverwrite
                name="package.overwrite"
                required
                className={classes.col6}
                onChange={this.onChange}
              />
            )
          }
        </CustomSection>
      </>
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
