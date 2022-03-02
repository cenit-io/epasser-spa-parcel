/**
 *
 * Account
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.jss';
import session from '../../base/session';

import AbstractComponent from '../AbstractComponent';
import Popover from '@mui/material/Popover';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

import { TenantIcon, UserIcon, EmailIcon } from '../Icons';

class Account extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state.anchorEl = null;
  }

  renderField(title, subtitle, icon) {
    return <Chip
      variant="outlined"
      color="primary"
      avatar={<Avatar>{icon}</Avatar>}
      label={
        <>
          <Typography variant="subtitle2" color="primary">
            <FormattedMessage {...subtitle} />:
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            {title}
          </Typography>
        </>
      }
    />
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const { name, is_ready: isReady, deactivation, user: { name: username, email } } = session.currentAccount;

    return (
      <div className={classes.root}>
        <IconButton color="inherit" onClick={this.onOpen}>
          <AccountCircle />
        </IconButton>
        <Popover
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={anchorEl !== null}
          anchorEl={anchorEl}
          onClose={this.onClose}
        >
          <Box p={2} className={classes.account}>
            {this.renderField(name, messages.tenant, <TenantIcon />)}
            {this.renderField(username, messages.username, <UserIcon />)}
            {this.renderField(email, messages.email, <EmailIcon />)}
          </Box>
        </Popover>
      </div>
    );
  }

  onOpen = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  }

  onClose = (e) => {
    this.setState({ anchorEl: null });
  }
}

export default withStyles(styles)(Account);
