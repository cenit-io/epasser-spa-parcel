/**
 *
 * Tasks
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
import TasksIcon from '@material-ui/icons/PermDataSettingOutlined';

export class Tasks extends AbstractPageList {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    state: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'Tasks';
  static icon = TasksIcon;
  static messages = messages;
  static apiPath = 'tasks';

  get columns() {
    return [
      { id: 'status', width: 120, format: this.statusFormat },
      { id: 'progress', align: 'center', width: 100 },
      { id: 'description' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  statusFormat = (value, row, column) => {
    let color = 'inherit';

    if (/pending/i.test(value)) {
      color = 'inherit';
    } else if (/running|paused/i.test(value)) {
      color = 'secondary';
    } else if (/failed|broked/i.test(value)) {
      color = 'error';
    } else if (/completed/i.test(value)) {
      color = 'primary';
    }

    return <Typography color={color} variant="body2">{value}</Typography>
  }
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(Tasks));
