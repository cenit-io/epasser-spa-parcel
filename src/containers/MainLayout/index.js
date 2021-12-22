/**
 *
 * MainLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AbstractComponent from '../../components/AbstractComponent';
import session from '../../base/session';
import styles from './styles.jss';
import LeftSlider from '../LeftSlider';
import SearchByTerm from '../../components/SearchByTerm';
import Account from '../../components/Account';
import ConfirmDialog from '../../components/ConfirmDialog';

class MainLayout extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = { children: null, style: null }

  constructor(props) {
    super(props);
    this.state = { leftSlider: { open: true, size: 300 } };
  }

  onToggleLeftDrawer = () => {
    const { leftSlider } = this.state;
    this.setState({ leftSlider: { ...leftSlider, open: !leftSlider.open } });
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
            <Account />
          </Toolbar>
        </AppBar>

        <LeftSlider open={open} size={size} />
        <ConfirmDialog moduleId="main" />
        <main className={classes.mainContent} style={{ width: `calc(100% - ${size}px)` }}>
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);
