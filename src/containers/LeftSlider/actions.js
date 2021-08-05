/*
 *
 * LeftSlider actions
 *
 */

import { TOGGLE_LEFT_DRAWER_MENU } from './constants';

export function doToggleLeftSlider(open) {
  return {
    type: TOGGLE_LEFT_DRAWER_MENU,
    open,
  };
}
