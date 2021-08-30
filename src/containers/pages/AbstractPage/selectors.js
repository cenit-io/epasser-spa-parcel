import { createSelector } from 'reselect';
import makeSelectSignIn from "../SignIn/selectors";
import { makeSelectModuleSearchTerm } from "../../../components/SearchByTerm/selectors";

/**
 * Default selector used by any Page
 */

const combiner = (signInState, searchByTermState) => ({ ...signInState, searchByTerm: searchByTermState });
const makeSelectCombinedStates = (moduleId) => createSelector(
  makeSelectSignIn(),
  makeSelectModuleSearchTerm(moduleId),
  combiner
);

export default makeSelectCombinedStates;
