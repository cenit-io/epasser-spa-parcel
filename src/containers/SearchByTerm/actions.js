/*
 *
 * SearchByTerm actions
 *
 */

import { APPLY_SEARCH_TERM, CHANGE_SEARCH_TERM } from './constants';

export function doChangeSearchTerm(searchTerm, activeTab) {
  return {
    type: CHANGE_SEARCH_TERM,
    searchTerm,
    activeTab,
  };
}

export function doApplySearchTerm(activeTab) {
  return {
    type: APPLY_SEARCH_TERM,
    activeTab,
  };
}
