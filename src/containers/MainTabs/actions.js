/*
 *
 * MainTabs actions
 *
 */

import { CHANGE_TAB_PAGE, OPEN_TAB_PAGE, CLOSE_TAB_PAGE } from './constants';

export function doChangeTabPage(tabId) {
  return {
    type: CHANGE_TAB_PAGE,
    tabId,
  };
}

export function doOpenTabPage(tab) {
  return {
    type: OPEN_TAB_PAGE,
    tab,
  };
}


export function doCloseTabPage(tabId) {
  return {
    type: CLOSE_TAB_PAGE,
    tabId,
  };
}
