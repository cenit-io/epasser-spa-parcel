/**
 *
 * TabItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import styles from './styles.jss';

import Button from "@material-ui/core/Button";

class TabItem extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    tab: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  onChange = (e) => {
    const { value, onChange } = this.props;
    onChange && onChange(e, value);
  }

  render() {
    const { classes, tab } = this.props;
    const Icon = tab.icon;

    return (
      <Button id={`tab-${tab.id}`} aria-controls={`tabpanel-${tab.id}`}
              variant="outlined"
              color="primary"
              className={classes.tabItemButton}
              startIcon={<Icon />}
              onClick={this.onChange}>
        <FormattedMessage {...tab.title} />
      </Button>
    );
  }
}

export default withStyles(styles)(TabItem);
