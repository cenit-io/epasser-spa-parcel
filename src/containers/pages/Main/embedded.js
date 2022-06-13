/**
 *
 * MainEmbedded
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import { requireModuleInstance } from '../../../base/modules';

import styles from './styles.jss';
import session from '../../../base/session';

import Loading from '../../../components/Loading';
import AbstractPage from '../../../components/AbstractPage';
import MainPageHeader from '../../../components/MainPageHeader';
import Divider from '../../../components/Divider';
import Notification from "../../../components/Notification";

class MainEmbedded extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      module: { id: 'Home', props: {} },
      isAuthenticate: session.isAuthenticate,
    };
    this.setMessagingListener('openModule', this.onOpenModule);
  }

  get moduleId() {
    return 'MainPage';
  }

  onOpenModule = (moduleId, props) => {
    this.setState({ module: { id: moduleId, props } });
  }

  render() {
    const { classes } = this.props;
    const { module, isAuthenticate } = this.state;

    if (!isAuthenticate) return <Loading />;

    return (
      <Card className={classes.cardPage}>
        <MainPageHeader moduleId={module.id} />
        <Notification className="embedded" moduleId={this.moduleId} />
        <CardContent>
          <Divider className={classes.separator} />
          {requireModuleInstance(module.id, module.props)}
        </CardContent>
      </Card>
    );
  }

  authWithOauth2(code, tenantId) {
    const options = {
      url: 'get_access_token',
      method: 'POST',
      data: { code, tenant_id: tenantId },
    };

    this.sendRequest(options).then((response) => {
      session.set('account', response.data);
      this.setState({ isAuthenticate: true, module: { id: 'Home', props: {} } });
    });
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);

    // eslint-disable-next-line consistent-return
    window.addEventListener('message', (event) => {
      const { origin, data: { cmd, tenantId, access } } = event;
      const CenitUIUrl = process.env.CENIT_UI_URL || 'https://app.cenit.io';

      if (origin !== CenitUIUrl) return false;

      if (cmd === 'refresh') {
        session.set('account', { ...session.currentAccount, tenantId });

        const { module: { id: moduleId } } = this.state;

        if (moduleId !== 'Home') {
          this.setState({ module: { id: 'Home', props: {} } });
        } else {
          this.emitMessage('reload', null, 'Home');
        }
      }

      if (access) {
        const { access_token: accessToken, expiration_date: expirationDate } = access;
        session.set('authorization', { tenantId, accessToken, expirationDate });
        this.authWithOauth2(accessToken, tenantId);
      }
    });

    if (urlParams.has('token')) {
      const token = urlParams.get('token');
      session.set('token', token);
      window.parent.postMessage({ cmd: 'getAccess', token }, '*');
    }
  }
}

export default withStyles(styles)(MainEmbedded);
