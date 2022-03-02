/**
 *
 * MainLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { withStyles } from '@mui/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import MenuIcon from '@mui/icons-material/Menu';
import AbstractComponent from '../../components/AbstractComponent';
import styles from './styles.jss';
import LeftSlider from '../LeftSlider';
import SearchByTerm from '../../components/SearchByTerm';
import Account from '../../components/Account';
import ConfirmDialog from '../../components/ConfirmDialog';
import Home from '../pages/Home';

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

  onTapHome = () => {
    this.emitMessage('openModule', Home.id, 'MainTabs');
  }

  render() {
    const { classes, pageTitle, children } = this.props;
    const { leftSlider: { open, size } } = this.state;

    return (
      <div className={classes.root}>
        <Helmet><title>{`API-Builder: ${pageTitle}`}</title></Helmet>

        <AppBar position="fixed" className={classes.appBar} color="primary">
          <Toolbar>
            <IconButton color="inherit" className={classes.menuButton} onClick={this.onToggleLeftDrawer} edge="start">
              <MenuIcon />
            </IconButton>
            <div className={classes.mainTitle}>
              <ButtonBase onClick={this.onTapHome}>
                <img src="/images/logo-passer-bw.png" alt="eCAPI-Logo" />
              </ButtonBase>
            </div>
            <SearchByTerm />
            <Account />
          </Toolbar>
        </AppBar>

        <LeftSlider open={open} size={size} />
        <ConfirmDialog moduleId="main" />
        <main className={classes.mainContent} style={{ width: `calc(100% - ${size})` }}>
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);
