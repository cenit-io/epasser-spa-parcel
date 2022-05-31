/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

const OrdersList = Loadable({ loader: () => import('./index'), loading: Loading });
const OrdersDocs = Loadable({ loader: () => import('./docs'), loading: Loading });

export { OrdersList, OrdersDocs };
