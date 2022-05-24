/**
 *
 * UnInstall
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';
import { UnInstallIcon } from '../../Icons';

import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class UnInstall extends AbstractWithSelectionAction {
  get color() {
    return this.disabled ? 'inherit' : 'error';
  }

  get icon() {
    return <UnInstallIcon color={this.color} />;
  }

  get label() {
    return (
      <Typography color={this.color} variant="button">
        <FormattedMessage {...messages.label} />
      </Typography>
    );
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length !== 1 || items[0].status === 'not_installed';
  }
}

export default withStyles(styles)(UnInstall);
