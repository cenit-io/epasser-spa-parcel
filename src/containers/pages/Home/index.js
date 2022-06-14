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
import Notification from "../../../components/Notification";

export class Home extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Notification moduleId={this.moduleId} />
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
    const { is_ready: isReady } = session.currentAccount || {};
    if (!isReady) this.notify(this.messages.tenant_not_ready, 'warning');
  }
}

export default withStyles(styles)(Home);
