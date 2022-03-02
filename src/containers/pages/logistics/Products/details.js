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
import ListAction from '../../../../components/actions/List';
import TextBox from '../../../../components/forms/fields/TextBox';
import IntegerBox from '../../../../components/forms/fields/NumberBox';

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
    const { item: { name, price, description, package: pk = {} }, } = this.state;

    return (
      <FormGroup>
        <fieldset className={classes.formSection}>
          <legend><FormattedMessage {...messages.basic} /></legend>
          <FormGroup row>
            <TextBox
              name="name"
              value={name}
              moduleId={this.moduleId}
              className={classes.col4}
              label={<FormattedMessage {...messages.field_name} />}
              onChange={this.onChange}
            />
            <TextBox
              name="price"
              value={price}
              moduleId={this.moduleId}
              className={classes.col2}
              label={<FormattedMessage {...messages.field_price} />}
              onChange={this.onChange}
            />
            <TextBox
              name="description"
              value={description}
              moduleId={this.moduleId}
              multiline={true}
              className={classes.col6}
              label={<FormattedMessage {...messages.field_description} />}
              onChange={this.onChange}
            />
          </FormGroup>
        </fieldset>

        <fieldset className={classes.formSection}>
          <legend><FormattedMessage {...messages.package} /></legend>
          <FormGroup row>
            <FormGroup className={classes.col2}>
              <IntegerBox
                name="weight"
                value={pk.weight}
                moduleId={this.moduleId}
                className={classes.col6}
                label={<FormattedMessage {...messages.field_weight} />}
                onChange={this.onChange}
              />
              <IntegerBox
                name="height"
                value={pk.height}
                moduleId={this.moduleId}
                className={classes.col6}
                label={<FormattedMessage {...messages.field_height} />}
                onChange={this.onChange}
              />
              <IntegerBox
                name="length"
                value={pk.length}
                moduleId={this.moduleId}
                className={classes.col6}
                label={<FormattedMessage {...messages.field_length} />}
                onChange={this.onChange}
              />
              <IntegerBox
                name="width"
                value={pk.width}
                moduleId={this.moduleId}
                className={classes.col6}
                label={<FormattedMessage {...messages.field_width} />}
                onChange={this.onChange}
              />
            </FormGroup>
            <TextBox
              name="content"
              value={pk.content}
              multiline={true}
              moduleId={this.moduleId}
              className={classes.col4}
              label={<FormattedMessage {...messages.field_content} />}
              onChange={this.onChange}
            />
          </FormGroup>
        </fieldset>
      </FormGroup>
    );
  }

  get actions() {
    return (
      <>
        <ListAction moduleId={this.moduleId} onClick={this.onBackToList} />
      </>
    );
  }
}
