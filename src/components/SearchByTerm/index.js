/**
 *
 * SearchByTerm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import styles from './styles.jss';
import AbstractComponent from '../AbstractComponent';

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
        <InputBase
          placeholder="Search…" inputProps={{ 'aria-label': 'search' }}
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

  /* eslint no-param-reassign: ["off"] */
  onChangeSearchTerm = (event) => {
    const { activeModuleId } = this.state;
    const searchTerm = event.target.value;

    this.setState((state) => {
      state[activeModuleId] = searchTerm;
      return state;
    });
  }

  onKeyPress = (e) => {
    // Apply the search term
    if (e.charCode === 13) {
      const { activeModuleId } = this.state;
      const currentSearchTerm = this.state[activeModuleId];
      this.state.appliedSearchTerm = currentSearchTerm;

      this.emitMessage('changeSearchTerm', currentSearchTerm, activeModuleId);
    }
  }

  /* eslint no-param-reassign: ["off"] */
  onBlur = () => {
    const { activeModuleId, appliedSearchTerm } = this.state;
    const currentSearchTerm = this.state[activeModuleId];

    if (currentSearchTerm !== appliedSearchTerm) {
      this.setState((state) => {
        state[activeModuleId] = appliedSearchTerm;
        return state;
      });
    }
  }

  onChangeActiveModule = (activeModuleId) => {
    this.setState({ activeModuleId, appliedSearchTerm: this.state[activeModuleId] });
  }
}

export default withStyles(styles)(SearchByTerm);
