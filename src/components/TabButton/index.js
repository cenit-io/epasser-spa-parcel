/**
 *
 * TabButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import CloseIcon from '@mui/icons-material/Clear';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';

import styles from './styles.jss';

import AbstractComponent from '../AbstractComponent';

class TabButton extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.string.isRequired,
    tabId: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  }

  static defaultProps = { onClose: null }

  constructor(props) {
    super(props);
    this.state = { hover: false, module: null };
    this.setMessagingListener('setModuleInstance', this.onSetModuleInstance, props.tabId);
  }

  get buttonCloseClass() {
    const { hover } = this.state;
    const { classes } = this.props;
    const hoverClass = hover ? classes.buttonCloseVisible : classes.buttonCloseHidden;

    return `${classes.buttonClose} ${hoverClass}`;
  }

  onMouseMove = () => this.setState({ hover: true });

  onMouseLeave = () => this.setState({ hover: false });

  onChange = (e) => {
    const { tabId, onChange } = this.props;
    onChange && onChange(e, tabId);
  }

  onCloseButtonClick = (e) => {
    e.stopPropagation();
    const { tabId, onClose } = this.props;
    onClose && onClose(e, tabId);
  }

  onSetModuleInstance = (module) => this.setState({ module })

  renderCloseButton() {
    const { onClose } = this.props;

    if (!onClose) return null;

    return (
      <Avatar className={this.buttonCloseClass} onClick={this.onCloseButtonClick}>
        <CloseIcon fontSize="small" color="error" />
      </Avatar>
    );
  }

  render() {
    const { module } = this.state;
    const { classes, active } = this.props;
    const { icon: Icon, messages: { title } = {} } = module || {};
    const loading = (module === null);

    return (
      <LoadingButton
        loading={loading}
        role="tab"
        className={classes.root}
        color="primary"
        variant={active && !loading ? 'contained' : 'outlined'}
        startIcon={Icon ? <Icon /> : undefined}
        onClick={this.onChange}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        <span>{title ? <FormattedMessage {...title} /> : '...'}</span>
        {this.renderCloseButton()}
      </LoadingButton>
    );
  }
}

export default withStyles(styles)(TabButton);
