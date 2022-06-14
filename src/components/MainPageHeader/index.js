/**
 *
 * MainPageHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';

import styles from './styles.jss';
import messages from './messages';

import AbstractComponent from '../AbstractComponent';
import SubMenuItem from '../SubMenuItem';

import Home from '../../containers/pages/Home';

import AvailableIntegrations from '../../containers/pages/integrations/AvailableIntegrations/settings';
import ConnectedIntegrations from '../../containers/pages/integrations/ConnectedIntegrations/settings';

import Orders from '../../containers/pages/ecommerces/Orders/settings';
import Products from '../../containers/pages/ecommerces/Products/settings';
import StockLocations from '../../containers/pages/ecommerces/StockLocations/settings';
import StockItems from '../../containers/pages/ecommerces/StockItems/settings';

import Flows from '../../containers/pages/workflows/Flows/settings';
import Webhooks from '../../containers/pages/workflows/Webhooks/settings';
import Tasks from '../../containers/pages/workflows/Tasks/settings';

class MainPageHeader extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
  }

  static defaultProps = { onClose: null }

  constructor(props) {
    super(props);
    this.state = { settings: null, open: false };
    this.setMessagingListener('openModule', this.onOpenModule, this.mainModuleId);
    this.onOpenModule(props.moduleId);
  }

  get moreAction() {
    const { open } = this.state;

    if (this.moduleId === 'Home') return null;

    return (
      <Tooltip title={<FormattedMessage {...messages.title} />}>
        <IconButton
          aria-label="menu"
          size="small"
          onClick={this.onOpen}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreIcon />
        </IconButton>
      </Tooltip>
    );
  }

  renderSubMenuItem(item) {
    if (typeof item === 'string') return <SubMenuItem key={item} title={item} />;
    return (
      <SubMenuItem
        key={item.id}
        icon={item.icon}
        title={item.title || item.messages.title}
        onClick={this.onTapItem(item)}
      />
    );
  }

  renderSubMenuItems(items) {
    return items.map((item) => this.renderSubMenuItem(item));
  }

  renderMenu() {
    const { open, anchorEl } = this.state;

    return (
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={this.onCloce}
        onClick={this.onCloce}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {this.renderSubMenuItems([Home])}
        <Divider />
        {this.renderSubMenuItems([AvailableIntegrations, ConnectedIntegrations])}
        <Divider />
        {this.renderSubMenuItems([Orders, Products, StockLocations, StockItems])}
        <Divider />
        {this.renderSubMenuItems([Flows, Webhooks, Tasks])}
      </Menu>
    );
  }

  render() {
    const { settings } = this.state;
    const { icon: Icon, messages: { title } = {} } = settings || {};

    return (
      <>
        <CardHeader
          titleTypographyProps={{ variant: 'body1' }}
          avatar={Icon ? <Icon fontSize="small" /> : null}
          title={title ? <FormattedMessage {...title} /> : '...'}
          action={this.moreAction}
        />
        {this.renderMenu()}
      </>
    );
  }

  onSetTabSettings = (settings) => this.setState({ settings })

  onTapItem = (item) => {
    if (!this.isAccessible(item.id)) return null;
    return () => this.emitMessage('openModule', item.id, this.mainModuleId);
  }

  onOpenModule = (moduleId) => {
    this.setMessagingListener('setTabSettings', this.onSetTabSettings, moduleId);
  }

  onOpen = (e) => {
    this.setState({ open: true, anchorEl: e.currentTarget });
  }

  onCloce = (e) => {
    this.setState({ open: false, anchorEl: null });
  }
}

export default withStyles(styles)(MainPageHeader);
