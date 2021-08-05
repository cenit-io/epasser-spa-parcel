/*
 *
 * LeftSlider reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_LEFT_DRAWER_MENU } from './constants';

export const initialState = fromJS({ open: true });

function leftSliderReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LEFT_DRAWER_MENU:
      return state.set('open', action.open);
    default:
      return state;
  }
}

export default leftSliderReducer;
