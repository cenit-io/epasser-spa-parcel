/**
 *
 * ConnectedIntegrations/Add
 *
 */

import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';

export class Add extends Details {
  static id = `${Details.id}/Add`;
}

export default withStyles(styles)(Add);
