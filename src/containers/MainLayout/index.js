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

import styles from './styles.jss';
import makeSelectSignIn from "../pages/SignIn/selectors";
import session from '../../base/session';

import AbstractComponent from "../../components/AbstractComponent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LeftSlider from "../LeftSlider";
import SearchByTerm from "../../components/SearchByTerm";

class MainLayout extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = { children: null, style: null }

  constructor(props) {
    super(props);
    this.state = { leftSlider: { open: true, size: 300 } };
  }

  onToggleLeftDrawer = () => {
    this.setState(prevState => {
      prevState.leftSlider.open = !prevState.leftSlider.open
      return prevState
    });
  }

  render() {
    const { classes, pageTitle, children } = this.props;
    const { leftSlider: { open, size } } = this.state;

    if (!session.isAuthenticate) return <Redirect to="/sign/in" />;

    return (
      <div className={classes.root}>
        <Helmet><title>{`ePasser: ${pageTitle}`}</title></Helmet>

        <AppBar position="fixed" className={classes.appBar} color="primary">
          <Toolbar>
            <IconButton color="inherit" className={classes.menuButton} onClick={this.onToggleLeftDrawer} edge="start">
              <MenuIcon />
            </IconButton>
            <div className={classes.mainTitle}>
              <img src="/images/logo-passer-bw.png" alt="eCAPI-Logo" />
            </div>
            <SearchByTerm />
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>

        <LeftSlider open={open} size={size} />

        <main className={classes.mainContent}>
          {children}
        </main>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({ state: makeSelectSignIn() });
const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(MainLayout));
