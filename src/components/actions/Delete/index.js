/**
 *
 * Delete
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractAction from "../AbstractAction";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';

class Delete extends AbstractAction {
  get icon() {
    return <DeleteForeverIcon color="error" />;
  }

  get label() {
    return (
      <Typography color="error" variant="button">
        <FormattedMessage {...messages.label} />
      </Typography>
    )
  }
}

export default withStyles(styles)(Delete);
