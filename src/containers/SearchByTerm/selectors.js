import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectMainTabs from "../MainTabs/selectors";

/**
 * Direct selector to the searchByTerm state domain
 */

const selectSearchByTermDomain = (state) => state.get('searchByTermState', initialState);

/**
 * Other specific selectors
 */

const makeSelectActiveSearchTerm = (activeTab) => createSelector(makeSelectSearchByTerm(), (state) => state[activeTab]);

/**
 * Default selector used by SearchByTerm
 */

const makeSelectSearchByTerm = () => createSelector(
  selectSearchByTermDomain, (searchByTermState) => searchByTermState.toJS(),
);

export default makeSelectSearchByTerm;
export { selectSearchByTermDomain };
