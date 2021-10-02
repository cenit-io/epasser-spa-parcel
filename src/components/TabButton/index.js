/**
 *
 * TabButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import styles from './styles.jss';

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Clear";
import Avatar from "@material-ui/core/Avatar";

class TabButton extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    tab: PropTypes.instanceOf(Object).isRequired,
    value: PropTypes.any.isRequired,
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
    const hoverClass = hover ? classes.buttonCloseVisible : classes.buttonCloseHidden

    return `${classes.buttonClose} ${hoverClass}`
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

    if (!onClose) return;

    return (
      <Avatar className={this.buttonCloseClass} onClick={this.onCloseButtonClick}>
        <CloseIcon fontSize="small" color="error" />
      </Avatar>
    )
  }

  render() {
    const { classes, tab } = this.props;
    const Icon = tab.icon;
    const title = tab.title || tab.messages.title;

    return (
      <div className={classes.root} onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
        <Button aria-controls={`tabpanel-${tab.id}`}
                variant="outlined"
                color="primary"
                startIcon={<Icon />}
                onClick={this.onChange}>
          <div className={classes.content}>
            <span><FormattedMessage {...title} /></span>
            {this.renderCloseButton()}
          </div>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TabButton);
