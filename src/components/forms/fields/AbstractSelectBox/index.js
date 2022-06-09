/**
 *
 * AbstractSelectBox
 *
 */

import React from 'react';

import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';

import AbstractField from '../AbstractField';

export default class AbstractSelectBox extends AbstractField {
  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.items = [];
    this.state.value = props.value;

    this.setMessagingListener('loadItemsSuccessful', this.onLoadItemsSuccessful, this.componentId);
    this.setMessagingListener('loadItemsFailed', this.onLoadItemsFailed, this.componentId);
  }

  get isMultiSelect() {
    return this.renderMultiValue !== undefined || this.constructor.isMultiSelect === true;
  }

  get parsedValue() {
    const { value } = this.state;

    if (!this.isMultiSelect || Array.isArray(value)) return value;
    if (value === '') return [];
    if (typeof value === 'string') return value.split(/\s*,\s*/);

    return [value];
  }

  loadItems = () => {
    const options = {
      url: this.apiPath,
      method: 'GET',
    };

    this.sendRequest(options).then((response) => {
      this.emitMessage('loadItemsSuccessful', response, this.componentId);
    }).catch((error) => {
      this.emitMessage('loadItemsFailed', error, this.componentId);
    });
  }

  renderLabel() {
    if (this.state.alreadyLoaded) return this.label;
    return <CircularProgress size="1em" thickness={3} color="secondary" />;
  }

  renderField() {
    const { readOnly } = this.props;
    const { alreadyLoaded, items } = this.state;

    if (!alreadyLoaded) this.loadItems();

    const { classes, required } = this.props;
    const { componentId, isMultiSelect } = this;
    const labelId = `${componentId}-label`;

    return (
      <Select
        id={componentId}
        labelId={labelId}
        label={this.renderLabel()}
        value={alreadyLoaded ? this.parsedValue : ''}
        classes={{ select: isMultiSelect ? classes.multiSelectBox : classes.selectBox }}
        multiple={isMultiSelect}
        readOnly={readOnly}
        disabled={readOnly || !alreadyLoaded}
        required={required}
        error={!this.isValid()}
        renderValue={isMultiSelect ? this.renderMultiValue : null}
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
