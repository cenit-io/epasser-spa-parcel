/**
 *
 * AbstractAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AbstractComponent from "../../AbstractComponent";

export default class AbstractAction extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
    disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    disabled: null,
    label: null
  };

  constructor(props) {
    super(props);
    this.state.locked = false;
    this.addMessagingListener('lockActions', this.onLockActions)
  }

  get icon() {
    return <SettingsApplicationsIcon />;
  }

  get label() {
    return '...';
  }

  get disabled() {
    let { disabled } = this.props;

    if (typeof disabled === 'function') disabled = disabled();

    return this.state.locked || disabled;
  }

  onClick = (e) => {
    this.props.onClick(e);
  }

  render() {
    const { classes, label } = this.props;

    return (
      <Button variant="text" color="primary" startIcon={this.icon} disabled={this.disabled} onClick={this.onClick}>
        <div className={classes.label}>
          {label || this.label}
        </div>
      </Button>
    );
  }

  onLockActions = (locked) => {
    this.setState({ locked });
  }
}