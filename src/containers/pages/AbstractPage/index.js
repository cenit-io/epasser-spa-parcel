/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { doToggleNextButtonStatus } from '../../Buttons/NextButton/actions';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPage extends React.Component {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    signInState: PropTypes.instanceOf(Object).isRequired,
  }

  data = {}

  get currentAccount() {
    const { signInState: { account } } = this.props;
    return account;
  }

  get isAuthenticate() {
    return !!this.currentAccount;
  }

  get isValid() {
    const keys = Object.keys(this.data);

    for (let i = 0; i < keys.length; i += 1) {
      const attr = this.data[keys[i]];
      if (Object.prototype.hasOwnProperty.call(attr, 'isValid') && !attr.isValid) return false;
    }

    return true;
  }

  get values() {
    const values = {};

    Object.keys(this.data).forEach((key) => {
      values[key] = this.data[key].value;
    });

    return values;
  }

  parseStringValue = (value) => {
    if (value === null || value === undefined) return undefined;
    return String(value);
  }

  onChange = (attr, value, isValid) => {
    const { dispatch } = this.props;
    this.data[attr] = { value, isValid };
    // dispatch(doToggleNextButtonStatus(this.isValid));
  }

  onGoto = (path) => () => this.goto(path);

  goto = (path) => {
    const { history } = this.props;
    history.push(path);
  }
}
