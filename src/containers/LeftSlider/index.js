/**
 *
 * LeftSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { injectReducer } from 'redux-injectors';

import styles from './styles.jss';
import makeSelectLeftSlider from './selectors';
import reducer from './reducer';
import messages from "./messages";

import { doOpenTabPage } from "../MainTabs/actions";

import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import SubMenuModules from "../../components/SubMenuModules";
import Dashboard from "../pages/integrations/Dashboard";
import AvailableIntegrations from "../pages/integrations/AvailableIntegrations";
import ConnectedIntegrations from "../pages/integrations/ConnectedIntegrations";
import Orders from "../pages/logistics/Orders";
import Products from "../pages/logistics/Products";
import StockLocations from "../pages/logistics/StockLocations";
import StockItems from "../pages/logistics/StockItems";
import Flows from "../pages/workflows/Flows";
import Tasks from "../pages/workflows/Tasks";
import Webhooks from "../pages/workflows/Webhooks";

class LeftSlider extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    leftSliderState: PropTypes.instanceOf(Object).isRequired,
    width: PropTypes.number,
  }

  static defaultProps = { width: 300 }

  onTapItem = (item) => {
    this.props.dispatch(doOpenTabPage(item));
  }

  render() {
    const { classes, leftSliderState: { open } } = this.props;

    return (
      <Drawer className={classes.drawer} variant="persistent" open={open}
              classes={{ paper: classes.drawerPaper }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <SubMenuModules title={messages.integrations}
                          onTapItem={this.onTapItem}
                          modules={[Dashboard, AvailableIntegrations, ConnectedIntegrations]} />

          <SubMenuModules title={messages.logistics}
                          onTapItem={this.onTapItem}
                          modules={[Orders, Products, StockLocations, StockItems]} />

          <SubMenuModules title={messages.workflows}
                          onTapItem={this.onTapItem}
                          modules={[Flows, Tasks, Webhooks]} />
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  leftSliderState: makeSelectLeftSlider(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps,);
const withReducer = injectReducer({ key: 'leftSliderState', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(LeftSlider));
