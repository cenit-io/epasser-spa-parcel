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
import Button from '@mui/material/Button';

import messages from './messages';

import AbstractModule from '../AbstractModule';

import { SaveIcon, ResetIcon, CancelIcon } from '../Icons';

/* eslint class-methods-use-this: ['off'] */
export default class AbstractPageDetails extends AbstractModule {
  static propTypes = {
    item: PropTypes.instanceOf(Object),
  }

  static defaultProps = { item: null };

  get successfulMessage() {
    return 'successfulOperation';
  }

  get requestData() {
    return this.state.item;
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
        <Button size="small" color="success" startIcon={<SaveIcon />} onClick={this.onSave}>
          <FormattedMessage {...messages.save} />
        </Button>
        <Button size="small" color="warning" startIcon={<ResetIcon />} onClick={this.onReset}>
          <FormattedMessage {...messages.reset} />
        </Button>
        {this.cancelAction}
      </CardActions>
    );
  }

  get cancelAction() {
    if (!this.onCancel) return null;

    return (
      <Button size="small" color="error" startIcon={<CancelIcon />} onClick={this.onCancel}>
        <FormattedMessage {...messages.cancel} />
      </Button>
    );
  }

  constructor(props) {
    super(props);
    this.state.item = props.item || this.defaultItem;
    this.state.alreadyLoaded = this.isAdd;
    this.state.validations = {};

    this.addMessagingListener('startLoadItem', this.onStartLoadItem);
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

  onCancel = this.onBackToList;

  onStartLoadItem = () => {
    const options = {
      url: this.apiPath,
      method: 'GET',
    };

    this.sendRequest(options).then((response) => {
      this.setState({ alreadyLoaded: true, item: response.data });
    });
  }

  onSave = () => {
    if (this.isValid) {
      const options = {
        url: this.apiPath,
        method: 'POST',
        data: { data: this.requestData },
      };

      this.sendRequest(options).then(() => {
        this.notify({ message: this.successfulMessage, severity: 'success' });
        if (this.isAdd) this.onReset();
      });
    } else {
      this.notify(Error('Some fields are invalid, please correct them.'));
    }
  }
}
