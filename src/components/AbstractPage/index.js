/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import AbstractComponent from '../AbstractComponent';
import session from '../../base/session';
import messages from './messages';
import ReloadAction from '../actions/Reload';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPage extends AbstractComponent {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.addMessagingListener('changeSearchTerm', this.onChangeSearchTerm, this.constructor.id);
  }

  get currentAccount() {
    return session.currentAccount;
  }

  get isAuthenticate() {
    return session.isAuthenticate;
  }

  get messages() {
    return this.constructor.messages || messages;
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
      </>
    );
  }

  renderToolbar() {
    const { classes } = this.props;
    const { actions } = this;

    if (!actions) return null;

    return (
      <Toolbar disableGutters className={classes.toolbar}>
        {actions}
      </Toolbar>
    );
  }

  lockActions = () => {
    this.emitMessage('lockActions', true);
  }

  unlockActions = () => {
    this.emitMessage('lockActions', false);
  }

  onGoto = (path) => () => this.goto(path);

  goto = (path) => {
    const { history } = this.props;
    history.push(path);
  }

  onChangeSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }
}
