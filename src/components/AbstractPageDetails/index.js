/**
 *
 * AbstractPageDetails
 *
 */

import React from 'react';
import AbstractModule from '../AbstractModule';

import { FormattedMessage } from 'react-intl';
import { request } from '../../base/request';

import messages from './messages';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { SaveIcon, ResetIcon } from '../Icons';
import PropTypes from 'prop-types';

/* eslint class-methods-use-this: ['off'] */
export default class AbstractPageDetails extends AbstractModule {
  static propTypes = {
    item: PropTypes.instanceOf(Object),
  }

  static defaultProps = { item: null };

  get successfulMessage() {
    return 'successfulOperation'
  }

  get requestData() {
    return this.state.item;
  }

  get isEdit() {
    return this.componentId.match(/Edit$/) ? true : false;
  }

  get isAdd() {
    return this.componentId.match(/Add$/) ? true : false;
  }

  constructor(props) {
    super(props);
    this.state.item = props.item || {};
    this.state.alreadyLoaded = this.isAdd;

    this.addMessagingListener('startLoadItem', this.onStartLoadItem);
  }

  renderContent() {
    const { classes } = this.props;
    const { alreadyLoaded } = this.state;

    if (!alreadyLoaded) return this.emitMessage('startLoadItem');

    return (
      <Card className={classes.root}>
        {this.form}
        <CardActions className={classes.actions}>
          <Button size='small' color='primary' startIcon={<SaveIcon />} onClick={this.onSave}>
            <FormattedMessage {...messages.save} />
          </Button>
          <Button size='small' color='primary' startIcon={<ResetIcon />} onClick={this.onReset}>
            <FormattedMessage {...messages.reset} />
          </Button>
        </CardActions>
      </Card>
    );
  }

  onChange = (field, value) => {
    this.state.item[field] = value;
  }

  onReset = () => {
    this.emitMessage('reset');
  }

  onStartLoadItem = () => {
    this.startWaiting(0);

    const options = {
      url: this.apiPath,
      method: 'GET',
    };

    request(options).then((response) => {
      this.setState({ alreadyLoaded: true, item: response.data });
    }).catch(error => {
      this.notify(error);
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  onSave = () => {
    this.startWaiting();

    const options = {
      url: this.apiPath,
      method: 'POST',
      data: { data: this.requestData }
    };

    request(options).then((response) => {
      this.notify({ message: this.successfulMessage, severity: 'success' });
      if (this.isAdd) this.onReset();
    }).catch(error => {
      this.notify(error);
    }).finally(() => {
      this.releaseWaiting();
    });
  }
}