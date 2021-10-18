/**
 *
 * AvailableIntegrations/List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AvailableIntegrationsIcon } from "../../../../components/Icons";

import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';

export class List extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'AvailableIntegrations';
  static icon = AvailableIntegrationsIcon;
  static messages = messages;
  static apiPath = 'available/integrations';
  static attrIds = 'collection_ids';

  get columns() {
    return [
      { id: 'title' },
      { id: 'summary' },
      { id: 'version' },
      { id: 'status' },
      { id: 'updated_at' },
      { id: 'installed_at' },
    ]
  }
}

export default withStyles(styles)(List);
