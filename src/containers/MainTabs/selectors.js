import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainTabs state domain
 */

const selectMainTabsDomain = (state) => state.get('mainTabsState', initialState);

/**
 * Other specific selectors
 */

const makeSelectTabsItems = () => createSelector(makeSelectMainTabs(), (state) => state.tabs);
const makeSelectActiveTab = () => createSelector(makeSelectMainTabs(), (state) => state.activeTab);

/**
 * Default selector used by MainTabs
 */

const makeSelectMainTabs = () => createSelector(selectMainTabsDomain, (state) => state.toJS());

export default makeSelectMainTabs;
export { makeSelectMainTabs, makeSelectTabsItems, makeSelectActiveTab };
