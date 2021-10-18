import React from "react";
import DashboardMain from "../containers/pages/integrations/Dashboard";
import AvailableIntegrationsList from "../containers/pages/integrations/AvailableIntegrations";

import ConnectedIntegrationsList from "../containers/pages/integrations/ConnectedIntegrations";
import ConnectedIntegrationsAdd from "../containers/pages/integrations/ConnectedIntegrations/add";
import ConnectedIntegrationsEdit from "../containers/pages/integrations/ConnectedIntegrations/edit";

import OrdersList from "../containers/pages/logistics/Orders";
import ProductsList from "../containers/pages/logistics/Products";
import StockItemsList from "../containers/pages/logistics/StockItems";
import StockLocationsList from "../containers/pages/logistics/StockLocations";
import FlowsList from "../containers/pages/workflows/Flows";
import TasksList from "../containers/pages/workflows/Tasks";
import WebhooksList from "../containers/pages/workflows/Webhooks";

export function requireModuleComponent(moduleId) {
  // Integrations modules
  if (moduleId === 'Dashboard') return DashboardMain;
  if (moduleId === 'AvailableIntegrations') return AvailableIntegrationsList;
  if (moduleId === 'ConnectedIntegrations') return ConnectedIntegrationsList;
  if (moduleId === 'ConnectedIntegrations/Add') return ConnectedIntegrationsAdd;
  if (moduleId === 'ConnectedIntegrations/Edit') return ConnectedIntegrationsEdit;

  // Workflows modules
  if (moduleId === 'Orders') return OrdersList;
  if (moduleId === 'Products') return ProductsList;
  if (moduleId === 'StockItems') return StockItemsList;
  if (moduleId === 'StockLocations') return StockLocationsList;

  // Logistics modules
  if (moduleId === 'Flows') return FlowsList;
  if (moduleId === 'Tasks') return TasksList;
  if (moduleId === 'Webhooks') return WebhooksList;

  throw Error(`Invalid module id: ${moduleId}`);
}

export function requireModuleInstance(moduleId, props) {
  // Integrations modules
  if (moduleId === 'Dashboard') return <DashboardMain />
  if (moduleId === 'AvailableIntegrations') return <AvailableIntegrationsList />

  if (moduleId === 'ConnectedIntegrations') return <ConnectedIntegrationsList />
  if (moduleId === 'ConnectedIntegrations/Add') return <ConnectedIntegrationsAdd />
  if (moduleId === 'ConnectedIntegrations/Edit') return <ConnectedIntegrationsEdit {...props} />

  // Workflows modules
  if (moduleId === 'Orders') return <OrdersList />
  if (moduleId === 'Products') return <ProductsList />
  if (moduleId === 'StockItems') return <StockItemsList />
  if (moduleId === 'StockLocations') return <StockLocationsList />

  // Logistics modules
  if (moduleId === 'Flows') return <FlowsList />
  if (moduleId === 'Tasks') return <TasksList />
  if (moduleId === 'Webhooks') return <WebhooksList />

  throw Error(`Invalid module id: ${moduleId}`);
}
