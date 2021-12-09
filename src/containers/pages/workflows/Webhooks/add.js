/**
 *
 * Webhooks/Add
 *
 */

import { withStyles } from '@material-ui/core/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';

export class Add extends Details {
  static id = `${Details.id}/Add`;

  get successfulMessage() {
    return 'successfulCreation';
  }
}

export default withStyles(styles)(Add);
