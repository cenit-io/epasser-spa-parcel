/*
 *
 * Waiting reducer
 *
 */

import { fromJS } from 'immutable';
import { START, RELEASE } from './constants';

export const initialState = fromJS({ enabled: 0 });

function WaitingReducer(state = initialState, action) {
  const enabled = state.get('enabled');

  switch (action.type) {
    case START:
      return state.set('enabled', Math.max(enabled + 1, 0));
    case RELEASE:
      return state.set('enabled', Math.max(enabled - 1, 0));
    default:
      return state;
  }
}

export default WaitingReducer;
