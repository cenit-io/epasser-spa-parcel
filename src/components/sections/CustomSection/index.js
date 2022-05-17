/**
 *
 * CustomSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import styles from './styles.jss';

import AbsSection from '../AbsSection';

class CustomSection extends AbsSection {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
  }

  get actions() {
    return this.props.actions;
  }

  renderContent() {
    return (<>{this.props.children}</>);
  }
}

export default withStyles(styles)(CustomSection);
