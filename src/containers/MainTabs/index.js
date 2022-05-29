/**
 *
 * MainTabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import { requireModuleInstance, requireModuleComponent } from '../../base/modules';

import styles from './styles.jss';

import AbstractComponent from '../../components/AbstractComponent';
import Divider from '../../components/Divider';
import Loading from '../../components/Loading';
import TabButton from '../../components/TabButton';

import HomeMain from '../pages/Home';

class MainTabs extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { activeTab: null, tabsModules: {} };
    this.setMessagingListener('openModule', this.onOpenModule);
    this.setMessagingListener('closeModules', this.onCloseModules);
    this.setMessagingListener('closeModule', this.onCloseModule);
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

  onOpenModule = (moduleId, props) => {
    const { tabsModules } = this.state;
    const tabId = moduleId.split('/')[0];

    tabsModules[tabId] = requireModuleComponent(moduleId);
    tabsModules[tabId].props = props;

    this.setActiveTabModule(tabId);
  }

  onCloseTab = (event, tabId) => {
    const { tabsModules } = this.state;
    delete tabsModules[tabId];
    this.setActiveTabModule('Home');
  }

  onCloseModule = (tabId) => {
    const { tabsModules, activeTab } = this.state;
    delete tabsModules[tabId];
    this.setActiveTabModule(activeTab === tabId ? 'Home' : activeTab);
  }

  onCloseModules = (options) => {
    const { tabsModules, activeTab } = this.state;
    const except = (options || {}).except || [];
    except.push('Home');

    Object.keys(tabsModules).forEach((tabId) => {
      if (except.indexOf(tabId) === -1) delete tabsModules[tabId];
    });

    if (!tabsModules[activeTab]) this.setActiveTabModule('Home');
  }

  renderTabButton(module, idx) {
    const { activeTab } = this.state;
    const tabId = module.id.split('/')[0];

    return (
      <TabButton
        tab={module} key={idx}
        value={tabId}
        active={activeTab === tabId}
        onClose={tabId !== 'Home' ? this.onCloseTab : undefined}
      />
    );
  }

  renderTapContent(module, idx) {
    const { classes } = this.props;
    const { activeTab } = this.state;
    const tabId = module.id.split('/')[0];

    if (activeTab !== tabId) return null;

    return (
      <div className={classes.tabPanel} role="tabpanel" key={idx} id={`tabpanel-${tabId}`}>
        {requireModuleInstance(module.id, module.props)}
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { activeTab, tabsModules } = this.state;

    if (activeTab === null) return <Loading />;

    const modules = Object.values(tabsModules);

    return (
      <div className={classes.root}>
        <Tabs
          className={classes.tabsBar}
          value={activeTab}
          variant="scrollable"
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          onChange={this.onChangeTab}
          classes={{
            flexContainer: classes.tabsContainer,
          }}
        >
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
    this.emitMessage('openModule', HomeMain.id);
  }
}

export default withStyles(styles)(MainTabs);
