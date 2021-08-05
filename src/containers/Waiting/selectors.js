import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the waitingState state domain
 */

const selectWaitingDomain = (state) => state.get('waitingState', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Waiting
 */

const makeSelectWaiting = () => createSelector(
  selectWaitingDomain, (waitingState) => waitingState.toJS(),
);

export default makeSelectWaiting;
export { selectWaitingDomain };
