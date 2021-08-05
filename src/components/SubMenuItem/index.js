/**
 *
 * SubMenuItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../styles';

import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import { FormattedMessage } from "react-intl";
import ListItem from "@material-ui/core/ListItem";
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

  render() {
    return (
      <ListItem button={true} onClick={this.onClick}>
        <ListItemAvatar>
          <Avatar>
            <this.props.icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.title} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(SubMenuItem);
