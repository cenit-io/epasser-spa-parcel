/**
 *
 * LeftSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';
import messages from "./messages";

import AbstractComponent from "../../components/AbstractComponent";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import SubMenuModules from "../../components/SubMenuModules";
import Dashboard from "../pages/integrations/Dashboard";
import AvailableIntegrations from "../pages/integrations/AvailableIntegrations";
import ConnectedIntegrations from "../pages/integrations/ConnectedIntegrations";
import Orders from "../pages/logistics/Orders";
import Products from "../pages/logistics/Products";
import StockLocations from "../pages/logistics/StockLocations";
import StockItems from "../pages/logistics/StockItems";
import Flows from "../pages/workflows/Flows";
import Tasks from "../pages/workflows/Tasks";
import Webhooks from "../pages/workflows/Webhooks";

class LeftSlider extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    open: PropTypes.bool.isRequired,
    size: PropTypes.number.isRequired,
  }

  onTapItem = (item) => {
    this.emitMessage('openModule', item, 'MainTabs')
  }

  render() {
    const { classes, open } = this.props;

    return (
      <Drawer className={classes.drawer} variant="persistent" open={open}
              classes={{ paper: classes.drawerPaper }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <SubMenuModules title={messages.integrations}
                          onTapItem={this.onTapItem}
                          modules={[Dashboard, AvailableIntegrations, ConnectedIntegrations]} />

          <SubMenuModules title={messages.logistics}
                          onTapItem={this.onTapItem}
                          modules={[Orders, Products, StockLocations, StockItems]} />

          <SubMenuModules title={messages.workflows}
                          onTapItem={this.onTapItem}
                          modules={[Flows, Tasks, Webhooks]} />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(LeftSlider);
