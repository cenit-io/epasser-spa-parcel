import { createSelector } from 'reselect';
import { initialState } from './reducer';
import makeSelectMainTabs from "../MainTabs/selectors";

/**
 * Direct selector to the leftSlider state domain
 */

const selectLeftSliderDomain = (state) => state.get('leftSliderState', initialState);

/**
 * Other specific selectors
 */

const makeSelectLeftSliderOpen = () => createSelector(makeSelectLeftSlider(), (state) => state.open);

/**
 * Default selector used by LeftSlider
 */

const makeSelectLeftSlider = () => createSelector(
  selectLeftSliderDomain, (leftSliderState) => leftSliderState.toJS(),
);

export default makeSelectLeftSlider;
export { selectLeftSliderDomain, makeSelectLeftSliderOpen };
