/**
 *
 * Products/EditProperties
 *
 */

import React from 'react';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import FormGroup from '@mui/material/FormGroup';

import styles from '../../../../components/AbstractPageDetails/styles.jss';
import Details from './details';
import CustomSection from '../../../../components/sections/CustomSection';

export class EditProperties extends Details {
  static id = `${Details.id}/EditProperties`;

  get actions() {
    return null;
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
}

export default withStyles(styles)(EditProperties);
