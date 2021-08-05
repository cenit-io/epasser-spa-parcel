/**
 *
 * AbstractField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
export default class AbstractField extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
  }

  static defaultProps = { value: '', onChange: null };

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = { value: value === null || value === undefined ? '' : String(value) };
  }

  onChange = (e) => this.setState({ value: e.target.value });

  isValid = () => true;

  transValue = (value) => value;

  componentDidMount = () => this.triggerChange();

  componentDidUpdate = () => this.triggerChange();

  triggerChange() {
    const { onChange } = this.props;

    if (onChange) {
      const { value } = this.state;
      const valid = this.isValid(value);
      const transValue = this.transValue(value);

      onChange(transValue, valid);
    }
  }
}
