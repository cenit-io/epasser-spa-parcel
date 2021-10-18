/**
 *
 * ConnectedIntegrations/Add
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import Details from './details';

import ListAction from "../../../../components/actions/List";

import TextField from '@material-ui/core/TextField';

export class Add extends Details {

  static id = 'ConnectedIntegrations/Add';

  get form() {
    return (
      <div>
        <TextField label="Filled" variant="outlined" />
        <TextField label="Filled" variant="outlined" />
        <TextField label="Filled" variant="outlined" />
        <TextField label="Filled" variant="outlined" />
      </div>
    )
  }

  get actions() {
    return [
      <ListAction moduleId={this.moduleId} onClick={this.onBackToList} />,
    ]
  }
}

export default withStyles(styles)(Add);
