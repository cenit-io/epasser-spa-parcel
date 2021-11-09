/**
 *
 * Flows/Edit
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';

export class Edit extends Details {

  static id = `${Details.id}/Edit`;

  get apiPath() {
    return `${Details.apiPath}/${this.state.item.id}`;
  }

  get successfulMessage() {
    return 'successfulUpdate'
  }
}

export default withStyles(styles)(Edit);
