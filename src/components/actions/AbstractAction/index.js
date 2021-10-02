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
  }

  get actionId() {
    return this.constructor.name;
  }

  get icon() {
    return <SettingsApplicationsIcon />;
  }

  get label() {
    return '...';
  }

  onClick = () => {
    this.emitMessage(this.actionId, null, this.props.moduleId)
  }

  render() {
    const { classes } = this.props;

    return (
      <Button variant="text" color="primary" startIcon={this.icon} onClick={this.onClick}>
        <div className={classes.label}>
          {this.label}
        </div>
      </Button>
    );
  }
}