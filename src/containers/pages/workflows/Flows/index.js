/**
 *
 * Flows
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { createStructuredSelector } from 'reselect';
import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';

import Typography from '@material-ui/core/Typography';
import FlowsIcon from '@material-ui/icons/Schedule';

export class Flows extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Flows';
  static icon = FlowsIcon;
  static messages = messages;
  static apiPath = 'flows';

  get columns() {
    return [
      { id: 'type', format: this.typeFormat },
      { id: 'integration', format: this.integrationFormat },
      { id: 'scheduler', width: 100, align: 'center', format: this.schedulerFormat },
      this.columnDateTime('updated_at'),
    ]
  }

  typeFormat = (value, row, column) => row.title;

  schedulerFormat = (value, row, column) => {
    value = row.task && row.task.scheduler && row.task.scheduler.active;
    return this.boolFormat(value, row, column);
  }
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(Flows));
