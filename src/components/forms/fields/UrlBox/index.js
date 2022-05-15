/**
 *
 * UrlBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import AbstractComponent from '../../../AbstractComponent';
import TextBox from '../TextBox';

export default class UrlBox extends AbstractComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    moduleId: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    style: PropTypes.instanceOf(Object),
  }

  static defaultProps = {
    onChange: null,
    style: null,
    value: '',
    readOnly: false,
    required: false,
  };

  constructor(props) {
    super(props);
    this.state.value = props.value || '';
  }

  render() {
    const { value } = this.state;

    return (
      <TextBox
        {...this.props}
        value={value}
        pattern={/^http(s)?:\/\/((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([\w-]+\.)+[a-z]{2,3})(:\d+)?(\/.*)*$/}
      />
    );
  }
}
