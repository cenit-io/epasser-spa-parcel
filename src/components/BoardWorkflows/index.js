/**
 *
 * BoardWorkflows
 *
 */

import { withStyles } from '@material-ui/core/styles';

import messages from './messages';
import styles from '../BoardModules/styles.jss';

import BoardModules from '../BoardModules';
import Flows from '../../containers/pages/workflows/Flows';
import Webhooks from '../../containers/pages/workflows/Webhooks';
import Tasks from '../../containers/pages/workflows/Tasks';

class BoardWorkflows extends BoardModules {
  get title() {
    return messages.title;
  }

  get modules() {
    return [Flows, Webhooks, Tasks];
  }
}

export default withStyles(styles)(BoardWorkflows);
