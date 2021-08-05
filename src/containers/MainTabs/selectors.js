import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainTabs state domain
 */

const selectMainTabsDomain = (state) => state.get('mainTabsState', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainTabs
 */

const makeSelectMainTabs = () => createSelector(
  selectMainTabsDomain, (mainTabsState) => mainTabsState.toJS(),
);

export default makeSelectMainTabs;
export { selectMainTabsDomain };
