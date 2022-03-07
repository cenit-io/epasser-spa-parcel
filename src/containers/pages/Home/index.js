/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { HomeIcon } from '../../../components/Icons';

import styles from './styles.jss';
import messages from './messages';
import AbstractPage from '../../../components/AbstractPage';

import BoardModules from '../../../components/BoardModules';
import AvailableIntegrations from '../integrations/AvailableIntegrations';
import ConnectedIntegrations from '../integrations/ConnectedIntegrations';
import Orders from '../ecommerces/Orders';
import Products from '../ecommerces/Products';
import StockLocations from '../ecommerces/StockLocations';
import StockItems from '../ecommerces/StockItems';
import Flows from '../workflows/Flows';
import Webhooks from '../workflows/Webhooks';
import Tasks from '../workflows/Tasks';

export class Home extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Home';

  static icon = HomeIcon;

  static messages = messages;

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BoardModules
          width="24%" height={350}
          title={messages.integrations}
          modules={[AvailableIntegrations, ConnectedIntegrations]}
        />
        <BoardModules
          width="24%" height={350}
          title={messages.eCommerces}
          modules={[Orders, Products, StockLocations, StockItems]}
        />
        <BoardModules
          width="24%" height={350}
          title={messages.documents}
          modules={['Contacts']}
        />
        <BoardModules
          width="24%" height={350}
          title={messages.workflows}
          modules={[Flows, Webhooks, Tasks]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
