/**
 *
 * TabButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Clear';
import Avatar from '@mui/material/Avatar';
import styles from './styles.jss';

class TabButton extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    tab: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func,
  }

  static defaultProps = { onClose: null }

  constructor(props) {
    super(props);
    this.state = { hover: false };
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
    const { value, onChange } = this.props;
    onChange && onChange(e, value);
  }

  onCloseButtonClick = (e) => {
    e.stopPropagation();
    const { value, onClose } = this.props;
    onClose && onClose(e, value);
  }

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
    const { classes, tab, active } = this.props;
    const Icon = tab.icon;
    const title = tab.title || tab.messages.title;

    return (
      <Button
        role="tab"
        className={classes.root}
        color="primary"
        variant={active ? 'contained' : 'outlined'}
        startIcon={Icon ? <Icon /> : undefined}
        onClick={this.onChange}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        <span><FormattedMessage {...title} /></span>
        {this.renderCloseButton()}
      </Button>
    );
  }
}

export default withStyles(styles)(TabButton);
