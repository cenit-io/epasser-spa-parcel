/**
 *
 * SearchByTerm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AbstractComponent from "../AbstractComponent";
import { withStyles } from '@material-ui/core/styles';

import styles from './styles.jss';

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

class SearchByTerm extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { activeModuleId: null };
    this.addMessagingListener('changeActiveTabModule', this.onChangeActiveModule, 'MainTabs');
  }

  onChangeSearchTerm = (event) => {
    const { activeModuleId } = this.state;
    const searchTerm = event.target.value;

    this.setState((state) => {
      state[activeModuleId] = searchTerm;
      return state;
    })
  }

  onApplySearchTerm = () => {
    const { activeModuleId } = this.state;
    this.emitMessage('changeSearchTerm', this.state[activeModuleId], activeModuleId);
  }

  onChangeActiveModule = (activeModuleId) => {
    this.setState({ activeModuleId });
  }

  render() {
    const { classes } = this.props;
    const { activeModuleId } = this.state;

    if (activeModuleId === null) return null;

    const searchTerm = this.state[activeModuleId] || '';

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
                   value={searchTerm}
                   onChange={this.onChangeSearchTerm}
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

export default withStyles(styles)(SearchByTerm);