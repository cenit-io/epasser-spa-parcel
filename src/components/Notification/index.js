/**
 *
 * Notification
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';
import Alert from '../Alert';
import messages from './messages';
import AbstractComponent from "../AbstractComponent";

class Notification extends AbstractComponent {
  static propTypes = {
    moduleId: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = { moduleId: null, className: null };

  constructor(props) {
    super(props);

    this.elRef = React.createRef();
    this.state.message = null;
    this.state.severity = null;

    this.addMessagingListener('notify', this.onNotify);
  }

  get message() {
    const { message: msg } = this.state;
    const { response } = msg;

    let id;
    let text;

    if (!(msg instanceof Object)) {
      id = String(msg);
    } else if (!response) {
      id = msg.message || String(msg);
    } else if (response.data && (response.data.error)) {
      id = response.data.error;
      text = response.data.error_description;
    } else {
      id = response.statusText;
    }

    text = text || id;

    return { id, text };
  }

  get severity() {
    const { message, severity } = this.state;

    switch (this.message.id) {
      case 'need_email_confirmation':
        return 'warning';
      default:
        return message instanceof Error ? 'error' : severity || 'info';
    }
  }

  get messageTranslation() {
    const { id, text } = this.message;
    const fmId = messages[id] || messages[text];
    return fmId ? (<FormattedMessage {...fmId} />) : text;
  }

  onNotify = (notification) => {
    let message, severity;

    if (typeof notification == 'string') {
      message = notification;
      severity = 'info';
    } else if (notification instanceof Error) {
      message = notification;
      severity = 'error';
    } else {
      message = notification.message;
      severity = notification.severity;
    }

    this.setState({ message, severity })
  }

  onClose = () => {
    this.setState({ message: null, severity: null });
  }

  componentDidUpdate = () => {
    const { message } = this.state;
    if (message && message !== '') this.elRef.current.scrollIntoView();
  }

  render() {
    const { classes, className } = this.props;
    const { message } = this.state;

    if (!message || message === '') return null;

    return (
      <div ref={this.elRef} className={`${classes.root} ${className}`}>
        <Alert severity={this.severity} style={{ marginBottom: '10px' }} onClose={this.onClose}>
          {this.messageTranslation}
        </Alert>
      </div>
    );
  }
}

export default withStyles(styles)(Notification);