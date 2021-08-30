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
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../styles';
import makeSelectSignIn from "../pages/SignIn/selectors";
import makeSelectLeftSlider from "../LeftSlider/selectors";

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
    pageTitle: PropTypes.string.isRequired,
    leftSlider: PropTypes.instanceOf(Object).isRequired,
    children: PropTypes.node,
  }

  static defaultProps = { children: null, style: null }

  onToggleLeftDrawer = () => {
    const { dispatch, leftSlider: { open } } = this.props;
    dispatch(doToggleLeftSlider(!open));
  }

  render() {
    const { classes, pageTitle, children, leftSlider: { size } } = this.props;

    // if (!this.isAuthenticate) return <Redirect to="/sign/in" />;

    return (
      <div className={classes.root}>
        <Helmet><title>{`ePasser: ${pageTitle}`}</title></Helmet>

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

        <LeftSlider width={size} />

        <main className={classes.mainContent}>
          {children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signInState: makeSelectSignIn(),
  leftSlider: makeSelectLeftSlider(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(MainLayout));
