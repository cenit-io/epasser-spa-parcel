/**
 *
 * UnAuthorize
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from '../AbstractAction/styles.jss';
import AbstractWithSelectionAction from '../AbstractWithSelectionAction';
import { UnAuthorizeIcon } from '../../Icons';
import Typography from "@material-ui/core/Typography";

class UnAuthorize extends AbstractWithSelectionAction {
  get color() {
    return this.disabled ? "inherit" : "error";
  }

  get icon() {
    return <UnAuthorizeIcon color={this.color} />;
  }

  get label() {
    return (
      <Typography color={this.color} variant="button">
        <FormattedMessage {...messages.label} />
      </Typography>
    )
  }

  get disabled() {
    const { locked, selectionItems: items } = this.state;
    return locked || items.length === 0 || (items.find(item => !item.authorized) !== undefined);
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems);
  }
}

export default withStyles(styles)(UnAuthorize);
