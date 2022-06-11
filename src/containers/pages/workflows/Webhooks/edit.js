/**
 *
 * Webhooks/Edit
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

  get requestData() {
    const { topic, integration, integration_id: integrationId, address } = this.state.item;
    return {
      topic, address, integration_id: integrationId || integration.id,
    };
  }
}

export default withStyles(styles)(Edit);
