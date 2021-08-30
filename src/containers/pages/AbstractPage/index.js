/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import eventEmitter from '../../../components/EventEmitter';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPage extends React.Component {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this._changeSearchTermToken = eventEmitter.addListener('changeSearchTerm', this.onChangeSearchTerm);

    console.log('constructor', this.constructor.id);
  }

  get currentAccount() {
    const { state: { account } } = this.props;
    return account;
  }

  get isAuthenticate() {
    return !!this.currentAccount;
  }

  onGoto = (path) => () => this.goto(path);

  goto = (path) => {
    const { history } = this.props;
    history.push(path);
  }

  onChangeSearchTerm = (moduleId, searchTerm) => {
    if (moduleId === this.constructor.id) this.setState({ searchTerm });
  }
}
