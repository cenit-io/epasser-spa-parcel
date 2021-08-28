/*
 *
 * MainTabs reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_TAB_PAGE, OPEN_TAB_PAGE, CLOSE_TAB_PAGE } from './constants';

import Dashboard from "../pages/integrations/Dashboard";

export const initialState = fromJS({
  activeTab: 'Dashboard',
  tabs: { Dashboard: Dashboard },
});

function mainTabsReducer(state = initialState, action) {
  let tabs;

  switch (action.type) {
    case CHANGE_TAB_PAGE:
      return state.set('activeTab', action.tabId);

    case OPEN_TAB_PAGE:
      tabs = state.get('tabs');
      if (!tabs.has(action.tab.id)) tabs = tabs.set(action.tab.id, action.tab);
      return state.set('tabs', tabs).set('activeTab', action.tab.id);

    case CLOSE_TAB_PAGE:
      tabs = state.get('tabs').filter((tab) => tab.id !== action.tabId);
      return state.set('tabs', tabs).set('activeTab', 'Dashboard');

    default:
      return state;
  }
}

export default mainTabsReducer;
