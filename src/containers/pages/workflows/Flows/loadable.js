/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export const FlowsList = Loadable({ loader: () => import('./index'), loading: Loading });
export const FlowsAdd = Loadable({ loader: () => import('./add'), loading: Loading });
export const FlowsEdit = Loadable({ loader: () => import('./edit'), loading: Loading });
