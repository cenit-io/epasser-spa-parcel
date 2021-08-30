/**
 *
 * SearchByTerm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { injectReducer } from 'redux-injectors';
import { withStyles } from '@material-ui/core/styles';
import { makeSelectActiveTab } from "../MainTabs/selectors";

import styles from './styles.jss';
import makeSelectSearchByTerm from './selectors';
import reducer from './reducer';
import eventEmitter from '../../components/EventEmitter';

import { doApplySearchTerm, doChangeSearchTerm } from "./actions";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

class SearchByTerm extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
    activeTab: PropTypes.string,
  }

  onChange = (event) => {
    const { dispatch, activeTab } = this.props;
    dispatch(doChangeSearchTerm(event.target.value, activeTab));
  }

  onApplySearchTerm = () => {
    const { activeTab, state } = this.props;
    eventEmitter.emit('changeSearchTerm', activeTab, state[activeTab].searchTerm);
  }

  render() {
    const { classes, state, activeTab } = this.props;

    if (activeTab === null) return null;

    const value = state[activeTab] ? state[activeTab].searchTerm : '';

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                   value={value}
                   onChange={this.onChange}
                   onBlur={this.onApplySearchTerm}
                   classes={{
                     root: classes.searchInputRoot,
                     input: classes.searchInputInput,
                   }}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  activeTab: makeSelectActiveTab(),
  state: makeSelectSearchByTerm()
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'searchByTermState', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(SearchByTerm));