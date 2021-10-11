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
    onClick: PropTypes.func.isRequired,
  }

  get icon() {
    return <SettingsApplicationsIcon />;
  }

  get label() {
    return '...';
  }

  get disabled() {
    return false;
  }

  onClick = (e) => {
    this.props.onClick(e);
  }

  render() {
    const { classes } = this.props;

    return (
      <Button variant="text" color="primary" startIcon={this.icon} disabled={this.disabled} onClick={this.onClick}>
        <div className={classes.label}>
          {this.label}
        </div>
      </Button>
    );
  }
}