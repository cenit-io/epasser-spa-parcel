/*
 *
 * SearchByTerm reducer
 *
 */

import { fromJS } from 'immutable';
import { APPLY_SEARCH_TERM, CHANGE_SEARCH_TERM } from './constants';

export const initialState = fromJS({});

function searchByTermReducer(state = initialState, action) {
  let activeTerm;

  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      activeTerm = fromJS({ applied: false, searchTerm: action.searchTerm });
      return state.set(action.activeTab, activeTerm);
    case APPLY_SEARCH_TERM:
      activeTerm = state.get(action.activeTab).set('applied', true);
      return state.set(action.activeTab, activeTerm);
    default:
      return state;
  }
}

export default searchByTermReducer;
