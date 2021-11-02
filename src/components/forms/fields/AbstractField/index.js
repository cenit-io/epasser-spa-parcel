/**
 *
 * AbstractField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import AbstractComponent from "../../../AbstractComponent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

export default class AbstractField extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    moduleId: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onError: PropTypes.func,
  }

  static defaultProps = { onChange: null, onError: null, className: '', value: '' };

  constructor(props) {
    super(props);
    this.state.value = props.value;

    this.addMessagingListener('reset', this.onReset)
  }

  get label() {
    return this.props.label;
  }

  renderField() {
    return <TextField value={this.state.value} />;
  }

  render() {
    const { classes, className } = this.props;
    const componentId = this.componentId;
    const labelId = `${componentId}-label`;
    const label = this.label;

    return (
      <FormControl variant="outlined" className={`${classes.root} ${className}`}>
        <InputLabel id={labelId} variant="outlined">{label}</InputLabel>
        {this.renderField()}
      </FormControl>
    );
  }

  onChange = (e) => {
    const { name, onChange } = this.props;
    this.setState({ value: e.target.value });
    onChange && onChange(name, e.target.value);
  }

  onReset = () => {
    this.setState({ value: this.props.value });
  }
}