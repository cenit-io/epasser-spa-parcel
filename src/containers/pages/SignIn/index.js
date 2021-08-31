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
import { Redirect } from 'react-router';
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
import PageContent from '../../../components/PageContent';

import { doAuthenticateWithAuthCode } from './actions';

import moment from "moment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { doHideNotification, doShowNotification } from "../../Notification/actions";

export class SignIn extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  onAuthWithAuthCode() {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has('code')) {
      const authCode = urlParams.get('code');
      const { dispatch } = this.props;
      dispatch(doAuthenticateWithAuthCode(authCode));
    } else {
      const redirectUri = window.location.href.replace(/\?.*$/, '');
      window.location = `${process.env.eCAPI_BASE_URL}/sign_in?redirect_uri=${redirectUri}`;
    }
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

        <PageContent>
          <Card>
            <CardHeader title={<FormattedMessage {...messages.title} />} subheader={moment().toDate().toDateString()} />
            <CardMedia image="/images/logo.png" title="ePasser" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <FormattedMessage {...messages.content} />
              </Typography>
            </CardContent>
          </Card>
        </PageContent>
      </div>
    );
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const { dispatch } = this.props;

    if (urlParams.has('error')) {
      const error = urlParams.get('error');
      const description = urlParams.get('error_description');
      dispatch(doShowNotification(Error(description || error)));
    } else if (urlParams.has('code')) {
      const authCode = urlParams.get('code');
      dispatch(doAuthenticateWithAuthCode(authCode));
    } else {
      dispatch(doShowNotification('gotoSignInPage', 'info'));
      setTimeout(this.onGotoCenitIOSignInPage, 5000);
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
