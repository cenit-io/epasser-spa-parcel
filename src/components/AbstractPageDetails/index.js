/**
 *
 * AbstractPageDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import messages from './messages';

import AbstractModule from '../AbstractModule';
import AdaptiveButton from '../AdaptiveButton';

import { SaveIcon, ResetIcon, CancelIcon } from '../Icons';

/* eslint class-methods-use-this: ['off'] */
export default class AbstractPageDetails extends AbstractModule {
  static propTypes = {
    item: PropTypes.instanceOf(Object),
  }

  static defaultProps = { item: null };

  get successfulMessage() {
    if (this.constructor.successfulMessage) return this.constructor.successfulMessage;
    if (this.isAdd) return 'successful_creation';
    if (this.isEdit) return 'successful_update';

    return 'successful_operation';
  }

  get requestData() {
    return this.state.item;
  }

  get requestMethod() {
    return this.constructor.requestMethod || 'POST';
  }

  get loadItemOptions() {
    return {};
  }

  get isEdit() {
    return !!this.componentId.match(/Edit$/);
  }

  get isAdd() {
    return !!this.componentId.match(/Add$/);
  }

  get isValid() {
    return Object.values(this.state.validations).indexOf(false) === -1;
  }

  get defaultItem() {
    return {};
  }

  get submitActions() {
    const { classes } = this.props;

    return (
      <CardActions className={classes.actions}>
        {this.saveAction}
        {this.resetAction}
        {this.cancelAction}
      </CardActions>
    );
  }

  get saveActionLabel() {
    let label = this.constructor.saveActionLabel || this.messages.save || messages.save;

    if (typeof label === 'string' && this.messages[label]) label = this.messages[label];
    if (typeof label === 'string' && messages[label]) label = messages[label];
    if (typeof label === 'string' || React.isValidElement(label)) return label;

    return <FormattedMessage {...label} />;
  }

  get saveActionIcon() {
    return this.constructor.saveActionIcon || <SaveIcon />;
  }

  get saveAction() {
    return (
      <AdaptiveButton
        label={this.saveActionLabel}
        color="success"
        icon={this.saveActionIcon}
        onClick={this.onSave}
      />
    );
  }

  get resetAction() {
    if (!this.onReset) return null;

    return (
      <AdaptiveButton
        label={<FormattedMessage {...messages.reset} />}
        color="warning"
        icon={<ResetIcon />}
        onClick={this.onReset}
      />
    );
  }

  get cancelAction() {
    if (!this.onCancel) return null;

    return (
      <AdaptiveButton
        label={<FormattedMessage {...messages.cancel} />}
        color="error"
        icon={<CancelIcon />}
        onClick={this.onCancel}
      />
    );
  }

  get needLoadData() { return this.isEdit; }

  constructor(props) {
    super(props);
    this.state.item = props.item || this.defaultItem;
    this.state.alreadyLoaded = !this.needLoadData;
    this.state.validations = {};

    this.setMessagingListener('startLoadItem', this.onStartLoadItem);
  }

  renderContent() {
    const { classes } = this.props;
    const { alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this.emitMessage('startLoadItem');

    return (
      <Card className={classes.form}>
        {this.form}
        {this.submitActions}
      </Card>
    );
  }

  /* eslint no-param-reassign: ["off"] */
  onChange = (field, value, valid, scope) => {
    const { validations, item } = this.state;

    if (scope === undefined) validations[field] = valid;

    scope = scope || item;

    if (field.match(/\w+\.\w+/)) {
      const attrs = field.split('.');
      field = attrs.shift();
      scope[field] = scope[field] || {};
      this.onChange(attrs.join('.'), value, valid, scope[field]);
    } else {
      scope[field] = value;
    }
  }

  onReset = () => this.emitMessage('reset');

  onCancel = () => this.onBackToList();

  onStartLoadItem = () => {
    const options = { url: this.apiPath, method: 'GET', ...this.loadItemOptions };

    this.sendRequest(options).then((response) => {
      this.setState({ alreadyLoaded: true, item: response.data });
    });
  }

  onSave = () => {
    if (this.isValid) {
      const options = {
        url: this.apiPath,
        method: this.requestMethod,
        data: { data: this.requestData },
        successfulMessage: this.successfulMessage,
      };

      this.sendRequest(options).then(() => this.onSaveSuccessful());
    } else {
      this.notify(Error('Some fields are invalid, please correct them.'));
    }
  }

  onSaveSuccessful() {
    if (this.isAdd) this.onReset();
  }
}
