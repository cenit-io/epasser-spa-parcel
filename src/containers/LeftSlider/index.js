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
import Home from '../pages/Home';
import AvailableIntegrations from '../pages/integrations/AvailableIntegrations';
import ConnectedIntegrations from '../pages/integrations/ConnectedIntegrations';
import Orders from '../pages/logistics/Orders';
import Products from '../pages/logistics/Products';
import StockLocations from '../pages/logistics/StockLocations';
import StockItems from '../pages/logistics/StockItems';
import Flows from '../pages/workflows/Flows';
import Tasks from '../pages/workflows/Tasks';
import Webhooks from '../pages/workflows/Webhooks';
import Themes from '../pages/settings/Themes';

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
            modules={[Home, AvailableIntegrations, ConnectedIntegrations]}
          />

          <SubMenuModules
            title={messages.logistics}
            onTapItem={this.onTapItem}
            modules={[Orders, Products, StockLocations, StockItems]}
          />

          <SubMenuModules
            title={messages.workflows}
            onTapItem={this.onTapItem}
            modules={[Flows, Tasks, Webhooks]}
          />

          <SubMenuModules
            title={messages.settings}
            onTapItem={this.onTapItem}
            modules={[Themes]}
          />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(LeftSlider);
