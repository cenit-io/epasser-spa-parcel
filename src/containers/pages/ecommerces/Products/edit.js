/**
 *
 * Products/Edit
 *
 */

import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';

export class Edit extends Details {
  static id = `${Details.id}/Edit`;

  get apiPath() {
    return `${Details.apiPath}/${this.state.item.id}`;
  }

  get successfulMessage() {
    return 'successfulUpdate';
  }

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = true;
  }
}

export default withStyles(styles)(Edit);
