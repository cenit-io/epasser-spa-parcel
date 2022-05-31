/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../../components/Loading';

export const TasksList = Loadable({ loader: () => import('./index'), loading: Loading });
export const TasksShow = Loadable({ loader: () => import('./show'), loading: Loading });
