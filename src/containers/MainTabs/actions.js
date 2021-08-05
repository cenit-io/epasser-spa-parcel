/*
 *
 * MainTabs actions
 *
 */

import { CHANGE_TAB_PAGE, OPEN_TAB_PAGE } from './constants';

export function doChangeTabPage(activeTab) {
  return {
    type: CHANGE_TAB_PAGE,
    activeTab,
  };
}

export function doOpenTabPage(tab) {
  return {
    type: OPEN_TAB_PAGE,
    tab,
  };
}
