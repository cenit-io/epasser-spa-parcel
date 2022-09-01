/**
 *
 * Products/EditBasic
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';

export class EditBasic extends Details {
  static id = `${Details.id}/Edit`;

  get apiPath() { return `${Details.apiPath}/${this.state.item.id}`; }

  get needLoadData() { return false; }

  get actions() {
    return null;
  }

  canNotDelete = (items) => items[0].integrations.length !== 0;

  canNotEditProps = (item) => item.integrations.length === 0;

  onEditProps = (e, item) => {
    const moduleId = `${this.moduleBaseId}/EditProps`;
    this.emitMessage('openModule', [moduleId, { item }], this.mainModuleId);
  }
}

export default withStyles(styles)(EditBasic);
