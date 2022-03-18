/**
 *
 * DateTimeFormat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Format extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  }

  render() {
    const { value } = this.props;

    return moment(value).format('YYYY-MM-DD hh:mm:ss');
  }
}
