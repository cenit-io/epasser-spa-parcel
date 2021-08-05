import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the notification state domain
 */

const selectNotificationDomain = (state) => state.get('notificationState', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Notification
 */

const makeSelectNotification = () => createSelector(
  selectNotificationDomain, (notificationState) => notificationState.toJS(),
);

export default makeSelectNotification;
export { selectNotificationDomain };
