/**
 *
 * CustomSectionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';

import styles from './styles.jss';

import AbsSectionForm from '../AbsSectionForm';

class CustomSectionForm extends AbsSectionForm {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
  }

  get actions() {
    return this.props.actions;
  }

  renderForm() {
    return (<>{this.props.children}</>);
  }
}

export default withStyles(styles)(CustomSectionForm);
