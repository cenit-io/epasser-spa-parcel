/**
 *
 * AbstractSelectBox
 *
 */

import React from 'react';

import Select from '@material-ui/core/Select';
import { CircularProgress } from '@material-ui/core';
import { request } from '../../../../base/request';

import AbstractField from '../AbstractField';

export default class AbstractSelectBox extends AbstractField {
  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.multiple = false;
    this.state.items = [];
    this.state.value = props.value;

    this.addMessagingListener('loadItemsSuccessful', this.onLoadItemsSuccessful, this.componentId);
    this.addMessagingListener('loadItemsFailed', this.onLoadItemsFailed, this.componentId);
  }

  get parsedValue() {
    const { multiple, value } = this.state;

    if (!multiple || Array.isArray(value)) return value;
    if (value === '') return [];
    if (typeof value === 'string') return value.split(/\s*,\s*/);

    return [value];
  }

  loadItems = () => {
    this.startWaiting(0);

    const options = {
      url: this.apiPath,
      method: 'GET',
    };

    request(options).then((response) => {
      this.emitMessage('loadItemsSuccessful', response, this.componentId);
    }).catch((error) => {
      this.emitMessage('loadItemsFailed', error, this.componentId);
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  renderLabel() {
    if (this.state.alreadyLoaded) return this.label;
    return <CircularProgress size="1em" thickness={3} color="secondary" />;
  }

  renderField() {
    const { readOnly } = this.props;
    const { alreadyLoaded, multiple, items } = this.state;

    if (!alreadyLoaded) this.loadItems();

    const { classes } = this.props;
    const { componentId } = this;
    const labelId = `${componentId}-label`;

    return (
      <Select
        id={componentId}
        labelId={labelId}
        label={this.renderLabel()}
        value={this.parsedValue}
        classes={{ select: multiple ? classes.multiSelectBox : classes.selectBox }}
        multiple={multiple}
        readOnly={readOnly}
        disabled={readOnly || !alreadyLoaded}
        renderValue={multiple ? this.renderMultiValue : null}
        onChange={this.onChange}
      >
        {items.map(this.renderItem)}
      </Select>
    );
  }

  onLoadItemsSuccessful = (response) => {
    this.setState({ alreadyLoaded: true, items: response.data });
  }

  onLoadItemsFailed = (error) => {
    const { onError } = this.props;
    this.setState({ alreadyLoaded: true, items: [] });
    onError && onError(error);
  }
}
