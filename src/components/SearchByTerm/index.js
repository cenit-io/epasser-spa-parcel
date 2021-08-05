/**
 *
 * SearchByTerm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.jss';

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

class SearchByTerm extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search…"
                   inputProps={{ 'aria-label': 'search' }}
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
