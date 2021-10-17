/**
 *
 * Flows
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { FlowsIcon } from "../../../../components/Icons";

import { createStructuredSelector } from 'reselect';
import styles from '../../../../components/AbstractPageList/styles.jss';
import messages from './messages';
import AbstractPageList from '../../../../components/AbstractPageList';
import makeSelectSignIn from '../../SignIn/selectors';
import ReloadAction from "../../../../components/actions/Reload";
import DeleteAction from "../../../../components/actions/Delete";

export class Flows extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Flows';
  static icon = FlowsIcon;
  static messages = messages;
  static apiPath = 'flows';
  static attrIds = 'flow_ids';

  get columns() {
    return [
      { id: 'type', format: this.typeFormat },
      { id: 'integration', format: this.integrationFormat },
      { id: 'scheduler', width: 100, align: 'center', format: this.schedulerFormat },
      this.columnDateTime('updated_at'),
    ]
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
      <DeleteAction moduleId={this.moduleId} onClick={this.onDelete} />,
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
