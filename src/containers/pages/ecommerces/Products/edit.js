/**
 *
 * Products/Edit
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';
import ActList from '../../../../components/actions/List';
import ActDelete from '../../../../components/actions/Delete';

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

  get actions() {
    const { item } = this.props;
    return (
      <>
        <ActList moduleId={this.moduleId} onClick={this.onBackToList} />
        <ActDelete moduleId={this.moduleId} onClick={this.onDelete} disabled={this.canNotDelete} items={[item]} />
      </>
    );
  }

  canNotDelete = (items) => items[0].integrations.length !== 0;
}

export default withStyles(styles)(Edit);
