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
import { withStyles } from '@material-ui/core/styles';
import { makeSelectActiveTab } from "../MainTabs/selectors";

import styles from './styles.jss';
import eventEmitter from '../../components/EventEmitter';


import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

class SearchByTerm extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    dispatch: PropTypes.func.isRequired,
    activeModuleId: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (event) => {
    const { activeModuleId } = this.props;
    const searchTerm = event.target.value;

    this.setState((state) => {
      state[activeModuleId] = searchTerm;
      return state;
    })
  }

  onApplySearchTerm = () => {
    const { activeModuleId } = this.props;
    eventEmitter.emit('changeSearchTerm', activeModuleId, this.state[activeModuleId]);
  }

  render() {
    const { classes, activeModuleId } = this.props;

    if (activeModuleId === null) return null;

    const searchTerm = this.state[activeModuleId] || '';

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                   value={searchTerm}
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

const mapStateToProps = createStructuredSelector({ activeModuleId: makeSelectActiveTab() });
const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(SearchByTerm));