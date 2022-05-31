/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export const ConnectedIntegrationsList = Loadable({ loader: () => import('./index'), loading: Loading });
export const ConnectedIntegrationsAdd = Loadable({ loader: () => import('./add'), loading: Loading });
export const ConnectedIntegrationsEdit = Loadable({ loader: () => import('./edit'), loading: Loading });
