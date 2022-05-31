/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export const WebhooksList = Loadable({ loader: () => import('./index'), loading: Loading });
export const WebhooksAdd = Loadable({ loader: () => import('./add'), loading: Loading });
export const WebhooksEdit = Loadable({ loader: () => import('./edit'), loading: Loading });
