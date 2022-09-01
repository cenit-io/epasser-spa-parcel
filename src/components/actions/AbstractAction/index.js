/**
 *
 * AbstractAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AbstractComponent from '../../AbstractComponent';

export default class AbstractAction extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
    disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
    withProps: PropTypes.instanceOf(Object),
    onClick: PropTypes.func,
  }

  static defaultProps = {
    disabled: null,
    label: null,
    onClick: null,
    withProps: null,
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
    return this.translate(this.props.label || this.label || this.messages.label);
  }

  get actionTitle() {
    return this.translate(this.props.title || this.title || this.messages.title || this.actionLabel);
  }

  get confirmMsg() {
    return this.translate(this.props.confirmMsg || this.messages.confirm_msg);
  }

  get disabled() {
    let { disabled } = this.props;

    if (typeof disabled === 'function') disabled = disabled();

    return this.state.locked || disabled;
  }

  render() {
    return (
      <Tooltip title={this.actionTitle} placement="top" enterDelay={300} arrow disableInteractive>
        <Box>
          <Button
            variant="text"
            color="primary"
            startIcon={this.icon}
            disabled={this.disabled}
            onClick={this.onClick}
          >
            <Typography color={this.color} variant="button">
              {this.actionLabel}
            </Typography>
          </Button>
        </Box>
      </Tooltip>
    );
  }

  onLockActions = (locked) => this.setState({ locked });

  onClick = (e) => {
    const { onClick } = this.props;
    onClick && onClick(e);
  }
}
