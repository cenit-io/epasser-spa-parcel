/**
 *
 * MainUnrmbedded
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@mui/styles';

import styles from './styles.jss';
import session from '../../../base/session';

import AbstractPage from '../../../components/AbstractPage';
import Notification from '../../../components/Notification';
import About from '../../../components/About';

import MainLayout from '../../MainLayout';
import MainTabs from '../../MainTabs';

class MainUnrmbedded extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state.currentAccount = session.currentAccount;
    this.setMessagingListener('setSessionAccount', this.onSetSessionAccount, 'Main');
  }

  onGotoCenitIOSignInPage = () => {
    window.location.href = `${session.apiBaseUrl}/sign_in?redirect_uri=${session.appBaseUrl}`;
  }

  render() {
    const { classes } = this.props;

    if (session.isAuthenticate) return <MainLayout pageTitle="Welcome"><MainTabs /></MainLayout>;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>ePasser: SignIN</title>
        </Helmet>

        <Notification className={classes.notify} moduleId={this.moduleId} />

        <About />
      </div>
    );
  }

  authWithAuthCode(authCode) {
    const options = {
      url: 'get_access_token',
      method: 'POST',
      data: { code: authCode },
    };

    this.sendRequest(options).then((response) => {
      this.emitMessage('setSessionAccount', response.data, 'Main');
    });
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('error')) {
      const error = urlParams.get('error');
      const description = urlParams.get('error_description');
      this.notify(Error(description || error));
    } else if (urlParams.has('code')) {
      const authCode = urlParams.get('code');
      this.authWithAuthCode(authCode);
    } else if (!this.isAuthenticate) {
      this.notify('gotoSignInPage');
      setTimeout(this.onGotoCenitIOSignInPage, 0);
    }
  }

  onSetSessionAccount = (currentAccount) => {
    session.set('account', currentAccount);
    this.setState({ currentAccount });
    this.goto('/');
  }
}

export default withStyles(styles)(MainUnrmbedded);
