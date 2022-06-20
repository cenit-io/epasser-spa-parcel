/**
 *
 * AdaptiveButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import styles from './styles.jss';
import session from '../../base/session';

import AbstractComponent from '../AbstractComponent';

class AdaptiveButton extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    // label: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { label, icon, color, onClick } = this.props;

    if (session.iFrameDetected) {
      return (
        <Tooltip placement="top" title={label} arrow disableInteractive>
          <IconButton size="large" color={color} onClick={onClick}>
            {icon}
          </IconButton>
        </Tooltip>
      );
    }

    return (
      <Button size="small" color={color} onClick={onClick} startIcon={icon}>
        {label}
      </Button>
    );
  }
}

export default withStyles(styles)(AdaptiveButton);
