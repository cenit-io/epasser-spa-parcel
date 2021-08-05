/**
 *
 * MainLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { injectSaga, injectReducer } from 'redux-injectors';

import styles from '../../styles';
import makeSelectMainLayout from './selectors';
import makeSelectSignIn from "../pages/SignIn/selectors";
import makeSelectLeftSlider from "../LeftSlider/selectors";
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LeftSlider from "../LeftSlider";
import SearchByTerm from "../../components/SearchByTerm";

import { doToggleLeftSlider } from "../LeftSlider/actions";

class MainLayout extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    mainLayoutState: PropTypes.instanceOf(Object).isRequired,
    pageTitle: PropTypes.string.isRequired,
    leftSliderSize: PropTypes.number,
    children: PropTypes.node,
  }

  static defaultProps = { children: null, style: null, leftSliderSize: 300 }

  onToggleLeftDrawer = () => {
    const { dispatch, leftSliderState: { open } } = this.props;
    dispatch(doToggleLeftSlider(!open));
  }

  render() {
    const { classes, pageTitle, leftSliderSize, children } = this.props;

    // if (!this.isAuthenticate) return <Redirect to="/sign/in" />;

    return (
      <div className={classes.root}>
        <Helmet><title>{`eCAPI: ${pageTitle}`}</title></Helmet>

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" className={classes.menuButton} onClick={this.onToggleLeftDrawer} edge="start">
              <MenuIcon />
            </IconButton>
            <div className={classes.mainTitle}>
              <img src="/images/cenit-logo.png" alt="eCAPI-Logo" />
            </div>
            <SearchByTerm />
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <LeftSlider width={leftSliderSize} />

        <main className={classes.mainContent}>
          {children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signInState: makeSelectSignIn(),
  mainLayoutState: makeSelectMainLayout(),
  leftSliderState: makeSelectLeftSlider(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'mainLayoutState', reducer });
const withSaga = injectSaga({ key: 'mainLayout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withStyles(styles)(MainLayout));
