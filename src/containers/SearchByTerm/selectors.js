import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchByTerm state domain
 */

const selectSearchByTermDomain = (state) => state.get('searchByTermState', initialState);

/**
 * Other specific selectors
 */

const makeSelectModuleSearchTerm = (moduleId) => createSelector(makeSelectSearchByTerm(), (state) => state[moduleId]);

/**
 * Default selector used by SearchByTerm
 */

const makeSelectSearchByTerm = () => createSelector(
  selectSearchByTermDomain, (searchByTermState) => searchByTermState.toJS(),
);

export default makeSelectSearchByTerm;
export { selectSearchByTermDomain, makeSelectModuleSearchTerm };
