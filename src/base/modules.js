import React from 'react';

import HomeMain from '../containers/pages/Home';

import AvailableIntegrationsList from '../containers/pages/integrations/AvailableIntegrations';

import ConnectedIntegrationsList from '../containers/pages/integrations/ConnectedIntegrations';
import ConnectedIntegrationsAdd from '../containers/pages/integrations/ConnectedIntegrations/add';
import ConnectedIntegrationsEdit from '../containers/pages/integrations/ConnectedIntegrations/edit';

import OrdersList from '../containers/pages/ecommerces/Orders';

import ProductsList from '../containers/pages/ecommerces/Products';
import ProductsAdd from '../containers/pages/ecommerces/Products/add';
import ProductsEdit from '../containers/pages/ecommerces/Products/edit';

import StockItemsList from '../containers/pages/ecommerces/StockItems';

import StockLocationsList from '../containers/pages/ecommerces/StockLocations';

import FlowsList from '../containers/pages/workflows/Flows';
import FlowsAdd from '../containers/pages/workflows/Flows/add';
import FlowsEdit from '../containers/pages/workflows/Flows/edit';

import TasksList from '../containers/pages/workflows/Tasks';
import TasksShow from '../containers/pages/workflows/Tasks/show';

import WebhooksList from '../containers/pages/workflows/Webhooks';
import WebhooksAdd from '../containers/pages/workflows/Webhooks/add';
import WebhooksEdit from '../containers/pages/workflows/Webhooks/edit';

import ThemesList from '../containers/pages/settings/Themes';

export function requireModuleComponent(moduleId) {
  // Integrations modules
  if (moduleId === 'Home') return HomeMain;

  if (moduleId === 'AvailableIntegrations') return AvailableIntegrationsList;

  if (moduleId === 'ConnectedIntegrations') return ConnectedIntegrationsList;
  if (moduleId === 'ConnectedIntegrations/Add') return ConnectedIntegrationsAdd;
  if (moduleId === 'ConnectedIntegrations/Edit') return ConnectedIntegrationsEdit;

  // eCommerces modules
  if (moduleId === 'Orders') return OrdersList;

  if (moduleId === 'Products') return ProductsList;
  if (moduleId === 'Products/Add') return ProductsAdd;
  if (moduleId === 'Products/Edit') return ProductsEdit;

  if (moduleId === 'StockItems') return StockItemsList;
  if (moduleId === 'StockLocations') return StockLocationsList;

  // Workflows modules
  if (moduleId === 'Flows') return FlowsList;
  if (moduleId === 'Flows/Add') return FlowsAdd;
  if (moduleId === 'Flows/Edit') return FlowsEdit;

  if (moduleId === 'Tasks') return TasksList;
  if (moduleId === 'Tasks/Show') return TasksShow;

  if (moduleId === 'Webhooks') return WebhooksList;
  if (moduleId === 'Webhooks/Add') return WebhooksAdd;
  if (moduleId === 'Webhooks/Edit') return WebhooksEdit;

  // Miscellany modules
  if (moduleId === 'Themes') return ThemesList;

  throw Error(`Invalid module id: ${moduleId}`);
}

export function requireModuleInstance(moduleId, props) {
  // Integrations modules
  if (moduleId === 'Home') return <HomeMain />;
  if (moduleId === 'AvailableIntegrations') return <AvailableIntegrationsList />;

  if (moduleId === 'ConnectedIntegrations') return <ConnectedIntegrationsList />;
  if (moduleId === 'ConnectedIntegrations/Add') return <ConnectedIntegrationsAdd />;
  if (moduleId === 'ConnectedIntegrations/Edit') return <ConnectedIntegrationsEdit {...props} />;

  // eCommerces modules
  if (moduleId === 'Orders') return <OrdersList />;

  if (moduleId === 'Products') return <ProductsList />;
  if (moduleId === 'Products/Add') return <ProductsAdd />;
  if (moduleId === 'Products/Edit') return <ProductsEdit {...props} />;

  if (moduleId === 'StockItems') return <StockItemsList />;
  if (moduleId === 'StockLocations') return <StockLocationsList />;

  // Workflows modules
  if (moduleId === 'Flows') return <FlowsList />;
  if (moduleId === 'Flows/Add') return <FlowsAdd />;
  if (moduleId === 'Flows/Edit') return <FlowsEdit {...props} />;

  if (moduleId === 'Tasks') return <TasksList />;
  if (moduleId === 'Tasks/Show') return <TasksShow {...props} />;

  if (moduleId === 'Webhooks') return <WebhooksList />;
  if (moduleId === 'Webhooks/Add') return <WebhooksAdd />;
  if (moduleId === 'Webhooks/Edit') return <WebhooksEdit {...props} />;

  // Miscellany modules
  if (moduleId === 'Themes') return <ThemesList />;

  throw Error(`Invalid module id: ${moduleId}`);
}
