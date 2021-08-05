/*
 *
 * MainTabs reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_TAB_PAGE, OPEN_TAB_PAGE } from './constants';

export const initialState = fromJS({
  activeTab: null,
  tabs: [],
});

function mainTabsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB_PAGE:
      return state.set('activeTab', action.activeTab);
    case OPEN_TAB_PAGE:
      let tabs = state.get('tabs');
      if (tabs.indexOf(action.tab) === -1) tabs = tabs.push(action.tab);
      return state.set('tabs', tabs).set('activeTab', action.tab.id);
    default:
      return state;
  }
}

export default mainTabsReducer;
