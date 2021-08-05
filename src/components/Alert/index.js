/**
 *
 * Alert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class Alert extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    severity: PropTypes.string,
    style: PropTypes.instanceOf(Object),
    onClose: PropTypes.func,
  }

  static defaultProps = {
    severity: 'info', style: null, onClose: null,
  };

  onClose = (e) => {
    const { onClose } = this.props;
    return onClose ? onClose(e) : null;
  }

  renderAction() {
    return (
      <IconButton aria-label="close" color="inherit" size="small" onClick={this.onClose}>
        <CloseIcon fontSize="inherit" />
      </IconButton>
    );
  }

  render() {
    const { children, severity, style } = this.props;

    if (!children || children === '') return null;

    return (
      <MuiAlert variant="filled" severity={severity} style={style} action={this.renderAction()}>
        {children}
      </MuiAlert>
    );
  }
}
