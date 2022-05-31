/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export const ProductsList = Loadable({ loader: () => import('./index'), loading: Loading });
export const ProductsAdd = Loadable({ loader: () => import('./add'), loading: Loading });
export const ProductsEdit = Loadable({ loader: () => import('./edit'), loading: Loading });
export const ProductsEditProps = Loadable({ loader: () => import('./editProperties'), loading: Loading });
