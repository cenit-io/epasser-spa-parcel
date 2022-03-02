/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { HomeIcon } from '../../../components/Icons';

import styles from './styles.jss';
import messages from './messages';
import AbstractPage from '../../../components/AbstractPage';

import BoardModules from '../../../components/BoardModules';
import AvailableIntegrations from "../integrations/AvailableIntegrations";
import ConnectedIntegrations from "../integrations/ConnectedIntegrations";
import Orders from "../logistics/Orders";
import Products from "../logistics/Products";
import StockLocations from "../logistics/StockLocations";
import StockItems from "../logistics/StockItems";
import Flows from "../workflows/Flows";
import Webhooks from "../workflows/Webhooks";
import Tasks from "../workflows/Tasks";

export class Home extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Home';

  static icon = HomeIcon;

  static messages = messages;

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <BoardModules
          title={messages.integrations}
          modules={[AvailableIntegrations, ConnectedIntegrations]}
        />
        <BoardModules
          title={messages.logistics}
          modules={[Orders, Products, StockLocations, StockItems]}
        />
        <BoardModules
          title={messages.workflows}
          modules={[Flows, Webhooks, Tasks]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
