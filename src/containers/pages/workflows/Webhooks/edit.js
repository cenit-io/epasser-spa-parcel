/**
 *
 * Webhooks/Edit
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

  get requestData() {
    const { topic, integration, integration_id, address } = this.state.item;
    return { topic, address, integration_id: integration_id || integration.id };
  }
}

export default withStyles(styles)(Edit);
