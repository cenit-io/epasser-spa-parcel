/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AbstractComponent from "../AbstractComponent";
import session from '../../base/session';
import messages from './messages';
import Toolbar from "@material-ui/core/Toolbar";
import ReloadAction from "../actions/Reload";

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
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
    ]
  }

  renderAction = (action, idx) => {
    return <div key={idx}>{action}</div>
  }

  renderToolbar() {
    const { classes } = this.props;
    const actions = this.actions;

    if (actions.length === 0) return;

    return (
      <Toolbar disableGutters={true} className={classes.toolbar}>
        {actions.map(this.renderAction)}
      </Toolbar>
    )
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
