/**
 *
 * Products/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import { ProductsIcon } from '../../../../components/Icons';

import styles from '../../../../components/AbstractPageList/styles.jss';
import settings from './settings';

import AbstractPageList from '../../../../components/AbstractPageList';
import ReloadAction from '../../../../components/actions/Reload';
import AddAction from '../../../../components/actions/Add';
import EditAction from '../../../../components/actions/Edit';
import DeleteAction from '../../../../components/actions/Delete';
import IntegrationFormat from '../../../../components/formats/IntegrationFormat';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = settings.id;

  static icon = settings.icon;

  static messages = settings.messages;

  static apiPath = settings.apiPath;

  static attrIds = settings.attrIds;

  get columns() {
    return [
      this.columnAvatar('images'),
      { id: 'name' },
      {
        id: 'price', width: 100, align: 'right',
      },
      {
        id: 'variants', width: 100, align: 'right',
      },
      { id: 'integrations', format: this.integrationsFormat },
    ];
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <AddAction moduleId={this.moduleId} onClick={this.onAdd} />
        <EditAction moduleId={this.moduleId} onClick={this.onEdit} />
        <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />
      </>
    );
  }

  avatarFormat = (value, row) => {
    const { classes } = this.props;
    const image = row.images[0];
    const defaultImage = image ? null : <ProductsIcon />;

    return (
      <Avatar src={image} variant="rounded" className={classes.largeAvatar}>
        {defaultImage}
      </Avatar>
    );
  }

  integrationsFormat = (value, row, column) => value.map(
    (integration) => <IntegrationFormat key={integration.id} value={integration} row={row} column={column} />,
  )
}

export default withStyles(styles)(List);
