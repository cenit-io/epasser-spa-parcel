/**
 *
 * Variants/Edit
 *
 */

import React from 'react';
import { withStyles } from '@mui/styles';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';
import ActList from '../../../../components/actions/List';
import ActEditProps from '../../../../components/actions/EditProps';
import ActDelete from '../../../../components/actions/Delete';
import ActVariants from "../../../../components/actions/Variants";
import ActLink from "../../../../components/actions/Link";
import ActUnLink from "../../../../components/actions/UnLink";

export class Edit extends Details {
  static id = `${Details.id}/Edit`;

  get apiPath() { return `${Details.apiPath}/${this.state.item.id}`; }

  get needLoadData() { return false; }

  get actions() {
    const {
      moduleId,
      props: { item, productId },
    } = this;

    return (
      <>
        <ActList moduleId={moduleId} withProps={{ productId }} />
        <ActLink moduleId={moduleId} onClick={this.onLink} items={[item]} />
        <ActUnLink moduleId={moduleId} onClick={this.onUnLink} disabled={this.canNotUnLink} items={[item]} />
        <ActDelete moduleId={moduleId} disabled={this.canNotDelete} items={[item]} />
      </>
    );
  }

  hasSomeIntegrations = (items) => items.some((item) => item.integrations.length !== 0);

  canNotDelete = (items) => this.hasSomeIntegrations(items);

  canNotUnLink = (items) => !this.hasSomeIntegrations(items);
}

export default withStyles(styles)(Edit);
