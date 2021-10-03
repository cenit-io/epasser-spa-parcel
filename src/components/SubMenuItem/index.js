/**
 *
 * SubMenuItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import styles from './styles.jss';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import history from '../../base/history';

class SubMenuItem extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string]).isRequired,
    icon: PropTypes.elementType.isRequired,
    path: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    path: null,
    onClick: null,
  }

  get title() {
    const { title } = this.props;

    if (title instanceof String) return title;

    return <FormattedMessage {...title} />;
  }

  onClick = () => {
    const { path, onClick } = this.props;

    if (onClick) return onClick();
    if (path) history.push(path);
  }

  renderInfo() {
    const { classes, info } = this.props;

    if (!info) return;

    return (
      <ListItemSecondaryAction>
        <Avatar className={classes.info}>{info}</Avatar>
      </ListItemSecondaryAction>
    )
  }

  render() {
    const { classes, icon: Icon } = this.props;

    return (
      <ListItem className={classes.root} button={true} onClick={this.onClick}>
        <ListItemAvatar>
          <Avatar className={classes.logo}><Icon /></Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.title} />
        {this.renderInfo()}
      </ListItem>
    );
  }
}

export default withStyles(styles)(SubMenuItem);
