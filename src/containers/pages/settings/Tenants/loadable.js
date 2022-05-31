/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export default Loadable({ loader: () => import('./index'), loading: Loading });

export const TenantsList = Loadable({ loader: () => import('./index'), loading: Loading });
export const TenantsAdd = Loadable({ loader: () => import('./add'), loading: Loading });
