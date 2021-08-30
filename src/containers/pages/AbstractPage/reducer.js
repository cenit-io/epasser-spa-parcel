/*
 *
 * AbstractPage reducer
 *
 */

import { fromJS } from 'immutable';
import { APPLY_SEARCH_TERM } from '../../SearchByTerm/constants';

export const initialState = fromJS({ searchTerm: '' });

function searchByTermReducer(state = initialState, action) {
  let activeTerm;

  switch (action.type) {
    case APPLY_SEARCH_TERM:
      activeTerm = state.get(action.activeTab).set('applied', true);
      return state.set(action.activeTab, activeTerm);
    default:
      return state;
  }
}

export default searchByTermReducer;
