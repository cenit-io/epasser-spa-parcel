/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import settings from './settings';
import styles from './styles.jss';
import session from '../../../base/session';

import AbstractPage from '../../../components/AbstractPage';
import BoardModules from '../../../components/BoardModules';
import AvailableIntegrations from '../integrations/AvailableIntegrations/settings';
import ConnectedIntegrations from '../integrations/ConnectedIntegrations/settings';
import Orders from '../ecommerces/Orders/settings';
import Products from '../ecommerces/Products/settings';
import StockLocations from '../ecommerces/StockLocations/settings';
import StockItems from '../ecommerces/StockItems/settings';
import Flows from '../workflows/Flows/settings';
import Webhooks from '../workflows/Webhooks/settings';
import Tasks from '../workflows/Tasks/settings';
import Notification from '../../../components/Notification';

import { HomeIcon, ShopIcon } from '../../../components/Icons';

export class Home extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = session.iFrameDetected ? ShopIcon : HomeIcon;

  static messages = settings.messages;

  static title = session.iFrameDetected ? settings.messages.title_for_embedded : settings.messages.title;

  constructor(props) {
    super(props);
    this.setMessagingListener('changeAccountStatus', this.onChangeAccountStatus, 'Global');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Notification moduleId={this.moduleId} className={session.iFrameDetected ? 'embedded' : 'unembedded'} />
        <BoardModules
          width="24%" height={350}
          title={this.messages.integrations}
          modules={[AvailableIntegrations, ConnectedIntegrations]}
        />
        <BoardModules
          width="24%" height={350}
          title={this.messages.eCommerces}
          modules={[Orders, Products, StockLocations, StockItems]}
        />
        <BoardModules
          width="24%" height={350}
          title={this.messages.documents}
          modules={['Contacts']}
        />
        <BoardModules
          width="24%" height={350}
          title={this.messages.workflows}
          modules={[Flows, Webhooks, Tasks]}
        />
      </div>
    );
  }

  componentDidMount = () => {
    const { status } = session.currentAccount || {};

    this.emitMessage('setModuleInstance', this);

    if (status !== 'ready') {
      if (this.messages[`tenant_${status}`]) {
        this.notify(this.messages[`tenant_${status}`], 'warning');
      } else {
        this.notify(this.messages.tenant_not_valid, 'warning');
      }
    }
  }

  onChangeAccountStatus = () => this.setState({ time: Date.now() });
}

export default withStyles(styles)(Home);
