/**
 *
 * AbstractAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import Button from '@mui/material/Button';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AbstractComponent from '../../AbstractComponent';

export default class AbstractAction extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
    disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    disabled: null,
    label: null,
  };

  constructor(props) {
    super(props);
    this.state.locked = false;
    this.setMessagingListener('lockActions', this.onLockActions);
  }

  get icon() {
    return this.props.icon || this.constructor.icon || <SettingsApplicationsIcon />;
  }

  get actionLabel() {
    let label = this.props.label || this.label || this.messages.label;

    if (typeof label === 'string' && this.messages[label]) label = this.messages[label];
    if (typeof label === 'string' || React.isValidElement(label)) return label;

    return <FormattedMessage {...label} />;
  }

  get disabled() {
    let { disabled } = this.props;

    if (typeof disabled === 'function') disabled = disabled();

    return this.state.locked || disabled;
  }

  render() {
    const { classes } = this.props;

    return (
      <Button variant="text" color="primary" startIcon={this.icon} disabled={this.disabled} onClick={this.onClick}>
        <div className={classes.label}>
          {this.actionLabel}
        </div>
      </Button>
    );
  }

  onClick = (e) => {
    this.props.onClick(e);
  }

  onLockActions = (locked) => {
    this.setState({ locked });
  }
}
