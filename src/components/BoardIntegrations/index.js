/**
 *
 * BoardIntegrations
 *
 */

import { withStyles } from '@mui/styles';

import messages from './messages';
import styles from '../BoardModules/styles.jss';

import BoardModules from '../BoardModules';
import AvailableIntegrations from '../../containers/pages/integrations/AvailableIntegrations';
import ConnectedIntegrations from '../../containers/pages/integrations/ConnectedIntegrations';

class BoardIntegrations extends BoardModules {
  get title() {
    return messages.title;
  }

  get modules() {
    return [AvailableIntegrations, ConnectedIntegrations];
  }
}

export default withStyles(styles)(BoardIntegrations);
