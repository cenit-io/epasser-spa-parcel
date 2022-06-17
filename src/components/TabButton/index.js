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
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

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

  onMouseOver = () => this.setState({ hover: true });

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

  renderIcon() {
    const { module } = this.state;
    const { icon: Icon } = module || {};
    const loading = (module === null);

    if (loading) return <CircularProgress size="1em" thickness={3} color="secondary" />;

    return Icon ? <Icon /> : undefined;
  }

  render() {
    const { classes, active } = this.props;
    const { module } = this.state;
    const { messages: { title } = {} } = module || {};
    const loading = (module === null);

    return (
      <Button
        role="tab"
        className={classes.root}
        color="primary"
        variant={active && !loading ? 'contained' : 'outlined'}
        startIcon={this.renderIcon()}
        onClick={this.onChange}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        <span>{title ? <FormattedMessage {...title} /> : '...'}</span>
        {this.renderCloseButton()}
      </Button>
    );
  }
}

export default withStyles(styles)(TabButton);
