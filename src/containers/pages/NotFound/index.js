/**
 *
 * NotFound
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

export class NotFound extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <div style={{ textAlign: 'center' }}>
          <FormattedMessage {...messages.msg} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(NotFound);
