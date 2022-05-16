/**
 *
 * ConfirmDialog
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AbstractComponent from '../AbstractComponent';
import styles from './styles.jss';
import messages from './messages';
import { ConfirmationIcon } from '../Icons';

class ConfirmDialog extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state.open = false;
    this.state.content = null;
    this.state.onClose = null;

    this.setMessagingListener('confirm', this.onOpen, this.moduleId);
  }

  render() {
    const { classes } = this.props;
    const { content, open } = this.state;

    return (
      <Dialog className={classes.root} maxWidth="sm" fullWidth open={open}>
        <DialogTitle className={classes.title}>
          <Chip
            variant="default" color="primary"
            avatar={<Avatar><ConfirmationIcon /></Avatar>}
            label={<FormattedMessage {...messages.title} />}
          />
        </DialogTitle>
        <DialogContent dividers>{content}</DialogContent>
        <DialogActions>
          <Button value={false} color="primary" onClick={this.onCancel} autoFocus>
            <FormattedMessage {...messages.cancel} />
          </Button>
          <Button value color="primary" onClick={this.onAccept}>
            <FormattedMessage {...messages.accept} />
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  close() {
    this.setState({
      open: false, content: null, onClose: null,
    });
  }

  onOpen = (content, onClose) => {
    this.setState({
      open: true, content, onClose,
    });
  }

  onCancel = () => {
    const { onClose } = this.state;
    this.close();
    onClose && onClose(false);
  }

  onAccept = () => {
    const { onClose } = this.state;
    this.close();
    onClose && onClose(true);
  }
}

export default withStyles(styles)(ConfirmDialog);
