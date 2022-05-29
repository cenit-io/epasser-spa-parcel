/**
 *
 * LeftSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import styles from './styles.jss';
import messages from './messages';

import AbstractComponent from '../../components/AbstractComponent';
import SubMenuModules from '../../components/SubMenuModules';

import AvailableIntegrations from '../pages/integrations/AvailableIntegrations/settings';
import ConnectedIntegrations from '../pages/integrations/ConnectedIntegrations/settings';
import Orders from '../pages/ecommerces/Orders/settings';
import Products from '../pages/ecommerces/Products/settings';
import StockLocations from '../pages/ecommerces/StockLocations/settings';
import StockItems from '../pages/ecommerces/StockItems/settings';
import Flows from '../pages/workflows/Flows/settings';
import Tasks from '../pages/workflows/Tasks/settings';
import Webhooks from '../pages/workflows/Webhooks/settings';
import Tenants from '../pages/settings/Tenants/settings';
import Themes from '../pages/settings/Themes/settings';

class LeftSlider extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    open: PropTypes.bool.isRequired,
    size: PropTypes.number.isRequired,
  }

  onTapItem = (item) => {
    this.emitMessage('openModule', item.id, 'MainTabs');
  }

  render() {
    const { classes, open } = this.props;

    return (
      <Drawer
        className={classes.root} variant="persistent" open={open}
        classes={{ paper: classes.drawer }}
      >
        <Toolbar />
        <div className={classes.container}>
          <SubMenuModules
            title={messages.integrations}
            onTapItem={this.onTapItem}
            modules={[AvailableIntegrations, ConnectedIntegrations]}
          />

          <SubMenuModules
            title={messages.eCommerces}
            onTapItem={this.onTapItem}
            modules={[Orders, Products, StockLocations, StockItems]}
          />

          <SubMenuModules
            title={messages.documents}
            onTapItem={this.onTapItem}
            modules={['Contacts']}
          />

          <SubMenuModules
            title={messages.workflows}
            onTapItem={this.onTapItem}
            modules={[Flows, Tasks, Webhooks]}
          />

          <SubMenuModules
            title={messages.settings}
            onTapItem={this.onTapItem}
            modules={[Tenants, Themes]}
          />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(LeftSlider);
