/**
 *
 * MainTabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';

import AbstractComponent from "../../components/AbstractComponent";
import Tabs from "@material-ui/core/Tabs";
import Divider from "../../components/Divider";
import Loading from "../../components/Loading";
import TapButton from "../../components/TabButton";

import Dashboard from "../pages/integrations/Dashboard";
import AvailableIntegrations from "../pages/integrations/AvailableIntegrations";
import ConnectedIntegrations from "../pages/integrations/ConnectedIntegrations";

import Orders from "../pages/logistics/Orders";
import Products from "../pages/logistics/Products";
import StockItems from "../pages/logistics/StockItems";
import StockLocations from "../pages/logistics/StockLocations";

import Flows from "../pages/workflows/Flows";
import Tasks from "../pages/workflows/Tasks";
import Webhooks from "../pages/workflows/Webhooks";

class MainTabs extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { activeTab: null, tabsModules: {} };
    this.addMessagingListener('openModule', this.onOpenTab, 'MainTabs');
  }

  setActiveTabModule(activeTab) {
    this.setState({ activeTab });
    this.emitMessage('changeActiveTabModule', activeTab, 'MainTabs');
  }

  onChangeTab = (event, activeTab) => {
    this.setActiveTabModule(activeTab);
  }

  onOpenTab = (module) => {
    const { tabsModules } = this.state;

    tabsModules[module.id] = module;
    this.setActiveTabModule(module.id);
  }

  onCloseTab = (event, moduleId) => {
    const { tabsModules } = this.state;
    delete tabsModules[moduleId];
    this.setActiveTabModule('Dashboard');
  }

  renderTapButton(module, idx) {
    return (
      <TapButton tab={module} value={module.id} key={idx}
                 onClose={module.id != 'Dashboard' ? this.onCloseTab : undefined} />
    )
  }

  renderModule(moduleId) {
    // Integrations modules
    if (moduleId === 'Dashboard') return <Dashboard />
    if (moduleId === 'AvailableIntegrations') return <AvailableIntegrations />
    if (moduleId === 'ConnectedIntegrations') return <ConnectedIntegrations />

    // Workflows modules
    if (moduleId === 'Orders') return <Orders />
    if (moduleId === 'Products') return <Products />
    if (moduleId === 'StockItems') return <StockItems />
    if (moduleId === 'StockLocations') return <StockLocations />

    // Logistics modules
    if (moduleId === 'Flows') return <Flows />
    if (moduleId === 'Tasks') return <Tasks />
    if (moduleId === 'Webhooks') return <Webhooks />

    throw Error(`Invalid module id: ${moduleId}`);
  }

  renderTapContent(module, idx) {
    const { activeTab } = this.state;

    return (
      <div id={`tabpanel-${module.id}`} role="tabpanel" hidden={activeTab !== module.id} key={idx}>
        {this.renderModule(module.id)}
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    const { activeTab, tabsModules } = this.state;

    if (activeTab === null) return <Loading />

    const modules = Object.values(tabsModules);

    return (
      <div className={classes.root}>
        <Tabs className={classes.tabsBar} value={activeTab}
              variant="scrollable"
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="auto"
              onChange={this.onChangeTab}
              classes={{
                flexContainer: classes.tabsContainer,
              }}>
          {modules.map((module, idx) => this.renderTapButton(module, idx))}
        </Tabs>
        <Divider className={classes.separator} />
        <div className={classes.content}>
          {modules.map((tab, idx) => this.renderTapContent(tab, idx))}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.emitMessage('openModule', Dashboard, 'MainTabs');
  }
}

export default withStyles(styles)(MainTabs);
