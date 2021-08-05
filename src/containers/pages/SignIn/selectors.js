import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signIn state domain
 */

const selectSignInDomain = (state) => state.get('signInState', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SignIn
 */

const makeSelectSignIn = () => createSelector(
  selectSignInDomain, (signInState) => signInState.toJS(),
);

export default makeSelectSignIn;
export { selectSignInDomain };
