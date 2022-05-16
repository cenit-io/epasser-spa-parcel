/**
 *
 * SchedulerFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import messages from './messages';

export default class Format extends React.Component {
  static propTypes = {
    value: PropTypes.instanceOf(Object),
    row: PropTypes.instanceOf(Object).isRequired,
  }

  static defaultProps = { value: null };

  render() {
    const { value, row } = this.props;
    const scheduler = value || row.scheduler || (row.task && row.task.scheduler) || null;
    const checked = scheduler && scheduler.active;
    const indeterminate = scheduler === null;

    let label;
    let color;

    if (indeterminate) {
      label = 'indeterminate';
      color = 'warning';
    } else if (checked) {
      label = 'activated';
      color = 'success';
    } else {
      label = 'disabled';
      color = 'error';
    }

    return (
      <Tooltip title={<FormattedMessage {...messages[label]} />}>
        <Checkbox
          checked={checked}
          indeterminate={indeterminate}
          size="small"
          color={color}
          readOnly disableRipple
        />
      </Tooltip>
    );
  }
}
