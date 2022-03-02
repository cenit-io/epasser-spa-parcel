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

import BoardIntegrations from '../../../components/BoardIntegrations';
import BoardLogistics from '../../../components/BoardLogistics';
import BoardWorkflows from '../../../components/BoardWorkflows';

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
        <BoardIntegrations />
        <BoardLogistics />
        <BoardWorkflows />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
