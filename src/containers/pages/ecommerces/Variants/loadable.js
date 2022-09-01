/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export const VariantsList = Loadable({ loader: () => import('./index'), loading: Loading });
export const VariantsAdd = Loadable({ loader: () => import('./add'), loading: Loading });
export const VariantsEdit = Loadable({ loader: () => import('./edit'), loading: Loading });
export const VariantsEditProps = Loadable({ loader: () => import('./editProperties'), loading: Loading });
export const VariantsLink = Loadable({ loader: () => import('./link'), loading: Loading });
export const VariantsUnlink = Loadable({ loader: () => import('./unlink'), loading: Loading });
