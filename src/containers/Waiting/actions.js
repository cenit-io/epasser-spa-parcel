/*
 *
 * Waiting actions
 *
 */

import { RELEASE, START } from './constants';

export function doStartWaiting() {
  return { type: START };
}

export function doReleaseWaiting() {
  return { type: RELEASE };
}
