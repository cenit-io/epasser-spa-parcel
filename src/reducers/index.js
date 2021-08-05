import { combineReducers } from 'redux-immutable';

/**
 * Creates the root reducer with the dynamically injected ones
 */
export default (injectedReducers = {}) => combineReducers({
  ...injectedReducers,
});
