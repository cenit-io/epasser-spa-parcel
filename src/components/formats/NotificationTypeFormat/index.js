/**
 *
 * BoolFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import messages from './messages';

export default class Format extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    row: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { value, row: { type } } = this.props;
    const severity = type === 'notice' ? 'success' : type;

    return (
      <Alert severity={severity}>
        <AlertTitle>{messages[type] ? <FormattedMessage {...messages[type]} /> : type}</AlertTitle>
        <Typography>{value}</Typography>
      </Alert>
    );
  }
}
