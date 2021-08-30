/**
 *
 * MainTabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { injectReducer } from 'redux-injectors';
import { doChangeTabPage, doCloseTabPage, doOpenTabPage } from "./actions";

import styles from './styles.jss';
import makeSelectMainTabs from './selectors';
import reducer from './reducer';

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

class MainTabs extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  onChangeTab = (event, tabId) => {
    const { dispatch } = this.props;
    dispatch(doChangeTabPage(tabId));
  }

  onCloseTab = (event, tabId) => {
    const { dispatch } = this.props;
    dispatch(doCloseTabPage(tabId));
  }

  renderTapButton(tab, idx) {
    return (
      <TapButton tab={tab} value={tab.id} onClose={tab.id != 'Dashboard' ? this.onCloseTab : undefined} key={idx} />
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

  renderTapContent(tab, idx) {
    const { state: { activeTab } } = this.props;

    return (
      <div id={`tabpanel-${tab.id}`} role="tabpanel" hidden={activeTab !== tab.id} key={idx}>
        {this.renderModule(tab.id)}
      </div>
    )
  }

  render() {
    const { classes, state: { activeTab, tabs } } = this.props;

    if (activeTab === null) return <Loading />

    const modules = Object.values(tabs);

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
          {modules.map((tab, idx) => this.renderTapButton(tab, idx))}
        </Tabs>
        <Divider className={classes.separator} />
        <div className={classes.content}>
          {modules.map((tab, idx) => this.renderTapContent(tab, idx))}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.props.dispatch(doOpenTabPage(Dashboard));
  }
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectMainTabs(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainTabsState', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(MainTabs));
