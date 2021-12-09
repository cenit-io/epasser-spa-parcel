/**
 *
 * Delete
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import Icon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';

class Delete extends AbstractWithSelectionAction {
  get color() {
    return this.disabled ? 'inherit' : 'error';
  }

  get icon() {
    return <Icon color={this.color} />;
  }

  get label() {
    return (
      <Typography color={this.color} variant="button">
        <FormattedMessage {...messages.label} />
      </Typography>
    );
  }
}

export default withStyles(styles)(Delete);
