import React from 'react';

import HomeMain from '../containers/pages/Home';
import AvailableIntegrationsList from '../containers/pages/integrations/AvailableIntegrations/loadable';
import ThemesList from '../containers/pages/settings/Themes/loadable';
import StockItemsList from '../containers/pages/ecommerces/StockItems/loadable';
import StockLocationsList from '../containers/pages/ecommerces/StockLocations/loadable';

import {
  ConnectedIntegrationsList,
  ConnectedIntegrationsAdd,
  ConnectedIntegrationsEdit,
} from '../containers/pages/integrations/ConnectedIntegrations/loadable';

import {
  ProductsList,
  ProductsAdd,
  ProductsEdit,
  ProductsEditProps,
  ProductsLink,
  ProductsUnlink,
} from '../containers/pages/ecommerces/Products/loadable';

import {
  VariantsList,
  VariantsAdd,
  VariantsEdit,
  VariantsEditProps,
  VariantsLink,
  VariantsUnlink,
} from '../containers/pages/ecommerces/Variants/loadable';

import { OrdersList, OrdersDocs } from '../containers/pages/ecommerces/Orders/loadable';
import { FlowsList, FlowsAdd, FlowsEdit } from '../containers/pages/workflows/Flows/loadable';
import { TasksList, TasksShow } from '../containers/pages/workflows/Tasks/loadable';
import { WebhooksList, WebhooksAdd, WebhooksEdit } from '../containers/pages/workflows/Webhooks/loadable';
import { TenantsList, TenantsAdd } from '../containers/pages/settings/Tenants/loadable';

// eslint-disable-next-line import/prefer-default-export
export function requireModuleInstance(moduleId, props) {
  // Integrations modules
  if (moduleId === 'Home') return <HomeMain />;
  if (moduleId === 'AvailableIntegrations') return <AvailableIntegrationsList />;

  if (moduleId === 'ConnectedIntegrations') return <ConnectedIntegrationsList />;
  if (moduleId === 'ConnectedIntegrations/Add') return <ConnectedIntegrationsAdd {...props} />;
  if (moduleId === 'ConnectedIntegrations/Edit') return <ConnectedIntegrationsEdit {...props} />;

  // eCommerces modules
  if (moduleId === 'Orders') return <OrdersList />;
  if (moduleId === 'Orders/Docs') return <OrdersDocs {...props} />;

  if (moduleId === 'Products') return <ProductsList />;
  if (moduleId === 'Products/Add') return <ProductsAdd {...props} />;
  if (moduleId === 'Products/Edit') return <ProductsEdit {...props} />;
  if (moduleId === 'Products/EditProps') return <ProductsEditProps {...props} />;
  if (moduleId === 'Products/Link') return <ProductsLink {...props} />;
  if (moduleId === 'Products/Unlink') return <ProductsUnlink {...props} />;

  if (moduleId === 'Variants') return <VariantsList {...props} />;
  if (moduleId === 'Variants/Add') return <VariantsAdd {...props} />;
  if (moduleId === 'Variants/Edit') return <VariantsEdit {...props} />;
  if (moduleId === 'Variants/EditProps') return <VariantsEditProps {...props} />;
  if (moduleId === 'Variants/Link') return <VariantsLink {...props} />;
  if (moduleId === 'Variants/Unlink') return <ProductsUnlink {...props} />;

  if (moduleId === 'StockItems') return <StockItemsList />;
  if (moduleId === 'StockLocations') return <StockLocationsList />;

  // Workflows modules
  if (moduleId === 'Flows') return <FlowsList {...props} />;
  if (moduleId === 'Flows/Add') return <FlowsAdd {...props} />;
  if (moduleId === 'Flows/Edit') return <FlowsEdit {...props} />;

  if (moduleId === 'Tasks') return <TasksList />;
  if (moduleId === 'Tasks/Show') return <TasksShow {...props} />;

  if (moduleId === 'Webhooks') return <WebhooksList />;
  if (moduleId === 'Webhooks/Add') return <WebhooksAdd {...props} />;
  if (moduleId === 'Webhooks/Edit') return <WebhooksEdit {...props} />;

  // Miscellany modules
  if (moduleId === 'Themes') return <ThemesList />;

  if (moduleId === 'Tenants') return <TenantsList />;
  if (moduleId === 'Tenants/Add') return <TenantsAdd {...props} />;

  throw Error(`Invalid module id: ${moduleId}`);
}
