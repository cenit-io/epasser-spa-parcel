/**
 *
 * SubMenuItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import styles from './styles.jss';
import history from '../../base/history';

class SubMenuItem extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string]).isRequired,
    icon: PropTypes.elementType.isRequired,
    path: PropTypes.string,
    info: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    path: null,
    info: null,
    onClick: null,
  }

  get title() {
    const { title } = this.props;

    if (title instanceof String) return title;

    return <FormattedMessage {...title} />;
  }

  onClick = () => {
    const { path, onClick } = this.props;

    if (onClick) {
      onClick();
    } else if (path) {
      history.push(path);
    }
  }

  renderInfo() {
    const { classes, info } = this.props;

    if (!info) return null;

    return (
      <ListItemSecondaryAction>
        <Avatar className={classes.info}>{info}</Avatar>
      </ListItemSecondaryAction>
    );
  }

  render() {
    const { classes, icon: Icon } = this.props;

    return (
      <ListItem className={classes.root} button onClick={this.onClick}>
        <ListItemAvatar>
          <Avatar className={classes.logo}><Icon color="primary" /></Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.title} />
        {this.renderInfo()}
      </ListItem>
    );
  }
}

export default withStyles(styles)(SubMenuItem);
