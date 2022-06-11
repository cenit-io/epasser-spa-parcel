/**
 *
 * Flows/Add
 *
 */

import { withStyles } from '@mui/styles';

import moment from 'moment';
import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';

export class Add extends Details {
  static id = `${Details.id}/Add`;

  get defaultItem() {
    const now = moment();

    return {
      task: {
        scheduler: {
          time: '00:00',
          start_date: now.format('YYYY-MM-DD'),
          end_date: now.add(5, 'Y').format('YYYY-MM-DD'),
          active: false,
        },
      },
    };
  }
}

export default withStyles(styles)(Add);
