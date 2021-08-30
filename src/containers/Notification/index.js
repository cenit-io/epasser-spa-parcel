/**
 *
 * Notification
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { injectReducer } from 'redux-injectors';
import { doHideNotification } from './actions';
import { doSendAccountConfirmationEmail } from '../pages/SignIn/actions';
import styles from '../../styles';
import makeSelectNotification from './selectors';
import reducer from './reducer';
import Alert from '../../components/Alert';
import messages from './messages';

class Notification extends React.Component {
  static propTypes = {
    state: PropTypes.instanceOf(Object),
    dispatch: PropTypes.func.isRequired,
  }

  static defaultProps = { state: { message: null } };

  constructor(props) {
    super(props);
    this.elRef = React.createRef();
  }

  get message() {
    const { state: { message: msg } } = this.props;
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
    const { state: { message, severity } } = this.props;

    switch (this.message.id) {
      case 'need_email_confirmation':
        return 'warning';
      default:
        return message instanceof Error ? 'error' : severity;
    }
  }

  get extra() {
    switch (this.message.id) {
      case 'need_email_confirmation':
        return (
          <Button variant="outlined" color="secondary" disableElevation onClick={this.onSendConfirmationEmail}>
            <FormattedMessage {...messages.sent_a_new_email} />
          </Button>
        );
      default:
        return null;
    }
  }

  get messageTranslation() {
    const { id, text } = this.message;
    const fmId = messages[id] || messages[text];
    return fmId ? (<FormattedMessage {...fmId} />) : text;
  }

  onSendConfirmationEmail = () => {
    const { dispatch, state: { message: msg } } = this.props;

    const urlParams = new URLSearchParams(msg.response.config.data);
    const email = urlParams.get('username');

    dispatch(doHideNotification());
    dispatch(doSendAccountConfirmationEmail(email));
  }

  onClose = () => {
    const { dispatch } = this.props;
    dispatch(doHideNotification());
  }

  componentDidUpdate = () => {
    const { state: { message } } = this.props;
    if (message && message !== '') this.elRef.current.scrollIntoView();
  }

  render() {
    const { state: { message } } = this.props;

    if (!message || message === '') return null;

    return (
      <div ref={this.elRef}>
        <Alert severity={this.severity} style={{ marginBottom: '10px' }} onClose={this.onClose}>
          {this.messageTranslation}
          {this.extra}
        </Alert>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ notificationState: makeSelectNotification() });
const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'notificationState', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(Notification));
