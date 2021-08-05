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
import { doChangeTabPage, doOpenTabPage } from "./actions";

import styles from './styles.jss';
import makeSelectMainTabs from './selectors';
import reducer from './reducer';

import Tabs from "@material-ui/core/Tabs";
import Divider from "../../components/Divider";
import Loading from "../../components/Loading";
import TabItem from "../../components/TabItem";
import Dashboard from "../pages/integrations/Dashboard";

class MainTabs extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    mainTabsState: PropTypes.instanceOf(Object).isRequired,
  }

  onTabChange = (event, newTabValue) => {
    const { dispatch } = this.props;
    dispatch(doChangeTabPage(newTabValue));
  }

  renderTap(tab, idx) {
    return <TabItem tab={tab} value={tab.id} key={idx} />
  }

  renderTapPage(tab, idx) {
    const { mainTabsState: { activeTab, tabs } } = this.props;

    let TapPageElement = tabs.find((t) => t.id === activeTab);

    return (
      <div id={`tabpanel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} key={idx}
           role="tabpanel" hidden={activeTab !== tab.id}>
        <TapPageElement />
      </div>
    )
  }

  render() {
    const { classes, mainTabsState: { activeTab, tabs } } = this.props;

    if (activeTab === null) return <Loading />

    return (
      <div className={classes.root}>
        <Tabs className={classes.tabsBar} value={activeTab}
              variant="scrollable"
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="auto"
              onChange={this.onTabChange}
              classes={{
                flexContainer: classes.tabsContainer
              }}>
          {tabs.map((tab, idx) => this.renderTap(tab, idx))}
        </Tabs>
        <Divider className={classes.separator} />
        <div className={classes.content}>
          {tabs.map((tab, idx) => this.renderTapPage(tab, idx))}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.props.dispatch(doOpenTabPage(Dashboard));
  }
}

const mapStateToProps = createStructuredSelector({
  mainTabsState: makeSelectMainTabs(),
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
