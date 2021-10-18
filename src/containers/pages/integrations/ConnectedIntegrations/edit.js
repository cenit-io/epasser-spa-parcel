/**
 *
 * ConnectedIntegrations/Edit
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import Details from './details';

import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";
import ListAction from "../../../../components/actions/List";

import TextField from '@material-ui/core/TextField';

export class Edit extends Details {

  static id = 'ConnectedIntegrations/Edit';

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
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
    ]
  }
}

export default withStyles(styles)(Edit);
