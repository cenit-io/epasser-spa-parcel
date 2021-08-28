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

import styles from './styles.jss';
import makeSelectSearchByTerm from './selectors';
import makeSelectMainTabs, { makeSelectActiveTab } from "../MainTabs/selectors";
import reducer from './reducer';

import { doApplySearchTerm, doChangeSearchTerm } from "./actions";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

class SearchByTerm extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    searchByTermState: PropTypes.instanceOf(Object).isRequired,
    mainTabsState: PropTypes.instanceOf(Object).isRequired,
  }

  onChange = (event) => {
    const { dispatch, mainTabsState: { activeTab } } = this.props;
    console.log(2222, activeTab);
    dispatch(doChangeSearchTerm(event.target.value, activeTab));
  }

  onApplySearchTerm = () => {
    const { dispatch, mainTabsState: { activeTab } } = this.props;

    dispatch(doApplySearchTerm(activeTab));
  }

  render() {
    const { classes, searchByTermState, mainTabsState: { activeTab } } = this.props;
    console.log(1111, activeTab);
    if (activeTab === null) return null;

    const value = searchByTermState[activeTab] ? searchByTermState[activeTab].searchTerm : '';

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
  mainTabsState: makeSelectMainTabs(),
  searchByTermState: makeSelectSearchByTerm()
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'searchByTermState', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(SearchByTerm));