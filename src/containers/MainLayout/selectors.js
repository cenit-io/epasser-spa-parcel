import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainLayout state domain
 */

const selectMainLayoutDomain = (state) => state.get('mainLayoutState', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainLayout
 */

const makeSelectMainLayout = () => createSelector(
  selectMainLayoutDomain, (mainLayoutState) => mainLayoutState.toJS(),
);

export default makeSelectMainLayout;
export { selectMainLayoutDomain };
