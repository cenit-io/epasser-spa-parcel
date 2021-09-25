/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectReducer, injectSaga } from 'redux-injectors';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';
import makeSelectSignIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import AbstractPage from '../AbstractPage';

import { doAuthenticateWithAuthCode } from './actions';

import moment from "moment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Notification from "../../../components/Notification";

export class SignIn extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  onGotoCenitIOSignInPage = () => {
    const redirectUri = window.location.href.replace(/\?.*$/, '');
    window.location = `${process.env.eCAPI_BASE_URL}/sign_in?redirect_uri=${redirectUri}`;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Helmet>
          <title>ePasser: SignIN</title>
        </Helmet>

        <Notification />

        <Card className={classes.signIn}>
          <CardHeader title={<FormattedMessage {...messages.title} />} subheader={moment().toDate().toDateString()} />
          <CardMedia className={classes.logo} component="img" image="/images/logo-passer.png" title="ePasser" />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              <FormattedMessage {...messages.content} />
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const { dispatch } = this.props;

    if (urlParams.has('error')) {
      const error = urlParams.get('error');
      const description = urlParams.get('error_description');
      this.emitMessage('notify', Error(description || error))
    } else if (urlParams.has('code')) {
      const authCode = urlParams.get('code');
      dispatch(doAuthenticateWithAuthCode(authCode));
    } else if (!this.isAuthenticate) {
      this.emitMessage('notify', 'gotoSignInPage');
      setTimeout(this.onGotoCenitIOSignInPage, 5000);
    } else {
      this.goto('/')
    }
  }

  componentDidUpdate = () => {
    if (this.isAuthenticate) this.goto('/')
  }
}

const mapStateToProps = createStructuredSelector({ state: makeSelectSignIn() });
const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'signInState', reducer });
const withSaga = injectSaga({ key: 'signIn', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withStyles(styles)(SignIn));
