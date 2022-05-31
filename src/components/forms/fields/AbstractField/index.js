/**
 *
 * AbstractField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import AbstractComponent from '../../../AbstractComponent';

export default class AbstractField extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    moduleId: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onError: PropTypes.func,
  }

  static defaultProps = {
    onChange: null,
    onError: null,
    className: '',
    value: '',
    readOnly: false,
    required: false,
  };

  constructor(props) {
    super(props);
    this.state.value = props.value;

    this.setMessagingListener('reset', this.onReset);
    this.setMessagingListener(`init:${props.name}`, this.onInit);
  }

  get label() {
    let label = this.props.label || this.messages.label;

    if (typeof label === 'string' && this.messages[label]) label = this.messages[label];
    if (typeof label === 'string' || React.isValidElement(label)) return label;

    return <FormattedMessage {...label} />;
  }

  isBlack = () => {
    const { value } = this.state;

    return value === '' || value === null || value === undefined || value.length === 0;
  }

  isValid = () => !(this.props.required && this.isBlack());

  transValue = (value) => value;

  renderField() {
    return <TextField value={this.state.value} />;
  }

  render() {
    const { classes, className, required, sx } = this.props;
    const { componentId } = this;
    const labelId = `${componentId}-label`;
    const { label } = this;

    return (
      <FormControl variant="outlined" sx={sx} className={`${classes.root} ${className}`}>
        <InputLabel id={labelId} variant="outlined" required={required} shrink>{label}</InputLabel>
        {this.renderField()}
      </FormControl>
    );
  }

  onChange = (e) => this.setState({ value: e.target.value });

  onReset = () => this.setState({ value: this.props.value });

  onInit = (value) => this.setState({ value });

  componentDidMount = () => this.triggerChange();

  componentDidUpdate = () => this.triggerChange();

  triggerChange() {
    const { name, onChange } = this.props;

    if (onChange) {
      const { value } = this.state;
      const valid = this.isValid(value);
      const transValue = this.transValue(value);
      onChange(name, transValue, valid);
    }
  }
}
