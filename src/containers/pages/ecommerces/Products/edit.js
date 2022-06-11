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
import ActEditProps from '../../../../components/actions/EditProps';
import ActDelete from '../../../../components/actions/Delete';

export class Edit extends Details {
  static id = `${Details.id}/Edit`;

  get apiPath() { return `${Details.apiPath}/${this.state.item.id}`; }

  get needLoadData() { return false; }

  get actions() {
    const {
      moduleId,
      props: { item },
      messages: { editPropsTitle },
    } = this;

    return (
      <>
        <ActList moduleId={moduleId} onClick={this.onBackToList} />
        <ActEditProps
          moduleId={moduleId}
          onClick={this.onEditProps}
          items={[item]}
          title={editPropsTitle}
          disabled={this.canNotEditProps}
        />
        <ActDelete moduleId={moduleId} onClick={this.onDelete} disabled={this.canNotDelete} items={[item]} />
      </>
    );
  }

  canNotDelete = (items) => items[0].integrations.length !== 0;

  canNotEditProps = (item) => item.integrations.length === 0;

  onEditProps = (e, item) => {
    const moduleId = `${this.moduleBaseId}/EditProps`;
    this.emitMessage('openModule', [moduleId, { item }], 'MainTabs');
  }
}

export default withStyles(styles)(Edit);
