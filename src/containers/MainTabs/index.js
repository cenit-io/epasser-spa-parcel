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
import TabButton from "../../components/TabButton";

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
    this.addMessagingListener('openModule', this.onOpenTab);
  }

  get moduleId() {
    return 'MainTabs';
  }

  setActiveTabModule(activeTab) {
    this.setState({ activeTab });
    this.emitMessage('changeActiveTabModule', activeTab);
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

  renderTabButton(module, idx) {
    const { activeTab } = this.state;

    return (
      <TabButton tab={module} key={idx}
                 value={module.id}
                 active={activeTab === module.id}
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
    const { classes } = this.props;
    const { activeTab } = this.state;

    return (
      <div className={classes.tabPanel} role="tabpanel" key={idx}
           id={`tabpanel-${module.id}`}
           hidden={activeTab !== module.id} key={idx}>
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
          {modules.map((module, idx) => this.renderTabButton(module, idx))}
        </Tabs>
        <Divider className={classes.separator} />
        <div className={classes.content}>
          {modules.map((tab, idx) => this.renderTapContent(tab, idx))}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.emitMessage('openModule', Dashboard);
  }
}

export default withStyles(styles)(MainTabs);
