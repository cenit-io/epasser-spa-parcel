/**
 *
 * Webhooks/settings
 *
 */

import { amber, blue, green, grey, red } from '@mui/material/colors';
import { TasksIcon } from '../../../../components/Icons';

import messages from './messages';

export default {
  id: 'Tasks',
  icon: TasksIcon,
  messages,
  apiPath: 'tasks',
  attrIds: 'task_ids',

  color: (value) => {
    if (/pending/i.test(value)) return grey[500];
    if (/running/i.test(value)) return green[500];
    if (/paused/i.test(value)) return amber[500];
    if (/failed|broked/i.test(value)) return red[500];
    if (/completed/i.test(value)) return blue[500];

    return grey[500];
  },
};
