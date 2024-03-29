/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AbstractComponent from '../AbstractComponent';
import session from '../../base/session';
import history from '../../base/history';
import messages from './messages';
import ActReload from '../actions/Reload';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPage extends AbstractComponent {
  constructor(props) {
    super(props);
    this.state.searchTerm = '';
    this.setMessagingListener('changeSearchTerm', this.onChangeSearchTerm, this.constructor.id);
  }

  get currentAccount() {
    return session.currentAccount;
  }

  get isAuthenticate() {
    return session.isAuthenticate;
  }

  get messages() {
    const { messages: customMessages } = this.props;
    return customMessages || this.constructor.messages || messages;
  }

  get icon() {
    return this.props.icon || this.constructor.icon;
  }

  get title() {
    return this.props.title || this.constructor.title || this.messages.title;
  }

  get actions() {
    return (
      <>
        <ActReload moduleId={this.moduleId} />
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
    history.push(path);
  }

  onChangeSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }

  componentDidMount = () => {
    this.emitMessage('setModuleInstance', this);
  }
}
