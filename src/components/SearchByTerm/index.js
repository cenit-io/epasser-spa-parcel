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
    this.state = { activeModuleId: null, appliedSearchTerm: '' };
    this.addMessagingListener('changeActiveTabModule', this.onChangeActiveModule, 'MainTabs');
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
                   onBlur={this.onBlur}
                   onChange={this.onChangeSearchTerm}
                   onKeyPress={this.onKeyPress}
                   classes={{
                     root: classes.searchInputRoot,
                     input: classes.searchInputInput,
                   }}
        />
      </div>
    );
  }

  onChangeSearchTerm = (event) => {
    const { activeModuleId } = this.state;
    const searchTerm = event.target.value;

    this.setState((state) => {
      state[activeModuleId] = searchTerm;
      return state;
    })
  }

  onKeyPress = (e) => {
    // Apply the search term
    if (e.charCode === 13) {
      const { activeModuleId } = this.state;
      const currentSearchTerm = this.state.appliedSearchTerm = this.state[activeModuleId];

      this.emitMessage('changeSearchTerm', currentSearchTerm, activeModuleId);
    }
  }

  onBlur = () => {
    const { activeModuleId, appliedSearchTerm } = this.state;
    const currentSearchTerm = this.state[activeModuleId];

    if (currentSearchTerm !== appliedSearchTerm) {
      this.setState((state) => {
        state[activeModuleId] = appliedSearchTerm;
        return state;
      })
    }
  }

  onChangeActiveModule = (activeModuleId) => {
    this.setState({ activeModuleId, appliedSearchTerm: this.state[activeModuleId] });
  }
}

export default withStyles(styles)(SearchByTerm);