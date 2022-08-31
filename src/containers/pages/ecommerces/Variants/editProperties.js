/**
 *
 * Variants/EditProperties
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import FormGroup from '@mui/material/FormGroup';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';
import ActList from '../../../../components/actions/List';
import ActEdit from '../../../../components/actions/Edit';
import ActDelete from '../../../../components/actions/Delete';
import CustomSection from '../../../../components/sections/CustomSection';

export class EditProperties extends Details {
  static id = `${Details.id}/EditProperties`;

  get actions() {
    const {
      moduleId,
      props: { item },
    } = this;

    return (
      <>
        <ActList moduleId={moduleId} onClick={this.onBackToList} />
        <ActEdit moduleId={moduleId} onClick={this.onEdit} items={[item]} />
        <ActDelete moduleId={moduleId} onClick={this.onDelete} disabled={this.canNotDelete} items={[item]} />
      </>
    );
  }

  get needLoadData() { return true; }

  get form() {
    const { props: { classes }, messages } = this;
    const { item } = this.state;

    return (
      <>
        <CustomSection title={messages.properties}>
          <FormGroup row>
            TODO: ...
          </FormGroup>
        </CustomSection>
      </>
    );
  }

  canNotDelete = (items) => items[0].integrations.length !== 0;
}

export default withStyles(styles)(EditProperties);
