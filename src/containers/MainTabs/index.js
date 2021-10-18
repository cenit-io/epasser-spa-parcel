/**
 *
 * MainTabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { requireModuleInstance, requireModuleComponent } from '../../base/modules';

import styles from './styles.jss';

import AbstractComponent from "../../components/AbstractComponent";
import Tabs from "@material-ui/core/Tabs";
import Divider from "../../components/Divider";
import Loading from "../../components/Loading";
import TabButton from "../../components/TabButton";

import DashboardMain from "../pages/integrations/Dashboard";
import AvailableIntegrationsList from "../pages/integrations/AvailableIntegrations";
import ConnectedIntegrationsList from "../pages/integrations/ConnectedIntegrations";
import ConnectedIntegrationsDetails from "../pages/integrations/ConnectedIntegrations/details";

import OrdersList from "../pages/logistics/Orders";
import ProductsList from "../pages/logistics/Products";
import StockItemsList from "../pages/logistics/StockItems";
import StockLocationsList from "../pages/logistics/StockLocations";

import FlowsList from "../pages/workflows/Flows";
import TasksList from "../pages/workflows/Tasks";
import WebhooksList from "../pages/workflows/Webhooks";

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

  onOpenTab = (moduleId) => {
    const { tabsModules } = this.state;
    const tabId = moduleId.split('/')[0];

    tabsModules[tabId] = requireModuleComponent(moduleId);
    this.setActiveTabModule(tabId);
  }

  onCloseTab = (event, tabId) => {
    const { tabsModules } = this.state;
    delete tabsModules[tabId];
    this.setActiveTabModule('Dashboard');
  }

  renderTabButton(module, idx) {
    const { activeTab } = this.state;
    const tabId = module.id.split('/')[0];

    return (
      <TabButton tab={module} key={idx}
                 value={tabId}
                 active={activeTab === tabId}
                 onClose={tabId != 'Dashboard' ? this.onCloseTab : undefined} />
    )
  }

  renderTapContent(module, idx) {
    const { classes } = this.props;
    const { activeTab } = this.state;
    const tabId = module.id.split('/')[0];

    return (
      <div className={classes.tabPanel} role="tabpanel" key={idx}
           id={`tabpanel-${tabId}`}
           hidden={activeTab !== tabId} key={idx}>
        {requireModuleInstance(module.id)}
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
    this.emitMessage('openModule', DashboardMain.id);
  }
}

export default withStyles(styles)(MainTabs);
