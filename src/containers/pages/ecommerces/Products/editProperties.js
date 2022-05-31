/**
 *
 * Products/EditProperties
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';
import ActList from '../../../../components/actions/List';
import ActEdit from '../../../../components/actions/Edit';
import ActDelete from '../../../../components/actions/Delete';

export class EditProperties extends Details {
  static id = `${Details.id}/EditProperties`;

  get apiPath() {
    return `${Details.apiPath}/${this.state.item.id}`;
  }

  get successfulMessage() {
    return 'successfulUpdate';
  }

  get actions() {
    const { item } = this.props;
    return (
      <>
        <ActList moduleId={this.moduleId} onClick={this.onBackToList} />
        <ActEdit moduleId={this.moduleId} onClick={this.onEdit} items={[item]} />
        <ActDelete moduleId={this.moduleId} onClick={this.onDelete} disabled={this.canNotDelete} items={[item]} />
      </>
    );
  }

  canNotDelete = (items) => items[0].integrations.length !== 0;
}

export default withStyles(styles)(Edit);
