/**
 *
 * Products/Edit
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import styles from './styles.jss';
import settings from './settings';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import ActList from '../../../../components/actions/List';
import ActDelete from '../../../../components/actions/Delete';
import ActVariants from '../../../../components/actions/Variants';
import ActLink from '../../../../components/actions/Link';
import ActUnLink from '../../../../components/actions/UnLink';
import EditBasic from './editBasic';
import EditProperties from './editProperties';

export class Edit extends AbstractPageDetails {
  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  constructor(props) {
    super(props);
    this.state.activeTab = 'basic';
  }

  get apiPath() { return `${settings.apiPath}/${this.state.item.id}`; }

  get actions() {
    const { moduleId: mId, props: { item } } = this;

    return (
      <>
        <ActList moduleId={mId} onClick={this.onBackToList} />
        <ActVariants moduleId={mId} onClick={this.onShowVariants} items={[item]} />
        <ActLink moduleId={mId} onClick={this.onLink} items={[item]} />
        <ActUnLink moduleId={mId} onClick={this.onUnLink} disabled={this.canNotUnLink} items={[item]} />
        <ActDelete moduleId={mId} onClick={this.onDelete} disabled={this.canNotDelete} items={[item]} />
      </>
    );
  }

  renderModule(module, item) {
    if (module === 'basic') return <EditBasic item={item} moduleId={this.moduleId} />;

    return <EditProperties item={item} moduleId={this.moduleId} />;
  }

  tabTitle(title) {
    return this.messages[title] ? <FormattedMessage {...this.messages[title]} /> : title;
  }

  tabIcon(icon) {
    const { classes } = this.props;
    return icon ? <Avatar src={icon} className={classes.smallAvatar} /> : null;
  }

  renderTapButton(tabId, item) {
    return (
      <Tab
        key={tabId}
        value={tabId}
        id={`product-tab-${tabId}`}
        label={tabId === 'basic' ? this.tabTitle('basic') : item.name}
        aria-controls={`product-tabpanel-${tabId}`}
        icon={this.tabIcon(item.icon)}
        iconPosition="start"
      />
    );
  }

  renderTapContent(tabId, item) {
    const { classes } = this.props;
    const { activeTab } = this.state;
    const hidden = activeTab !== tabId;

    return (
      <div
        className={classes.tabPanel}
        id={`product-tabpanel-${tabId}`}
        aria-labelledby={`product-tab-${tabId}`}
        role="tabpanel"
        hidden={hidden}
        key={tabId}
      >
        {this.renderModule(tabId, item)}
      </div>
    );
  }

  renderContent() {
    const { classes, item } = this.props;
    const { alreadyLoaded, activeTab } = this.state;

    if (!alreadyLoaded) return this.emitMessage('startLoadItem');

    return (
      <Box className={classes.detailsContainer}>
        <Tabs
          // orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={this.onChangeTab}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {this.renderTapButton('basic', item)}
          {item.integrations.map((integration) => this.renderTapButton(integration.id, integration))}
        </Tabs>
        {this.renderTapContent('basic', item)}
        {item.integrations.map((integration) => this.renderTapContent(integration.id, integration))}
      </Box>
    );
  }

  hasSomeIntegrations = (items) => items.some((item) => item.integrations.length !== 0);

  canNotDelete = (items) => this.hasSomeIntegrations(items);

  canNotUnLink = (items) => !this.hasSomeIntegrations(items);

  onChangeTab = (event, activeTab) => {
    this.setState({ activeTab });
  }

  onLink = (e, products) => {
    const moduleId = `${this.moduleBaseId}/Link`;
    this.emitMessage('openModule', [moduleId, { products }], this.mainModuleId);
  }

  onUnLink = (e, products) => {
    const moduleId = `${this.moduleBaseId}/Unlink`;
    this.emitMessage('openModule', [moduleId, { products }], this.mainModuleId);
  }

  onShowVariants = (e, item) => {
    this.emitMessage('openModule', ['Variants', { product_id: item.id }], this.mainModuleId);
  }
}

export default withStyles(styles)(Edit);
