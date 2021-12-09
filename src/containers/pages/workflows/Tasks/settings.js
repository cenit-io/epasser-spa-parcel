/**
 *
 * Webhooks/settings
 *
 */

import { TasksIcon } from '../../../../components/Icons';

import messages from './messages';

export default {
  id: 'Tasks',
  icon: TasksIcon,
  messages,
  apiPath: 'tasks',
  attrIds: 'task_ids',
};
