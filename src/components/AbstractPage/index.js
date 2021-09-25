/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AbstractComponent from "../AbstractComponent";
import session from '../Session';
import messages from './messages';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPage extends AbstractComponent {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
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

  get moduleId() {
    return this.constructor.id || this.constructor.name;
  }

  get messages() {
    return this.constructor.messages || messages;
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
