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
import Tooltip from '@mui/material/Tooltip';

import { ManagementIcon } from '../Icons';

import styles from './styles.jss';
import history from '../../base/history';
import messages from './messages';

class SubMenuItem extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.string]).isRequired,
    icon: PropTypes.elementType,
    path: PropTypes.string,
    info: PropTypes.string,
    feature: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    path: null,
    info: null,
    feature: false,
    onClick: null,
    icon: ManagementIcon,
  }

  get title() {
    const { title } = this.props;

    if (typeof title === 'string') return title;

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
    const { classes, icon: Icon, onClick, feature } = this.props;
    const item = (
      <ListItem className={classes.root} button onClick={this.onClick} disabled={!onClick}>
        <ListItemAvatar>
          <Avatar className={classes.logo}><Icon fontSize="small" /></Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.title} />
        {this.renderInfo()}
      </ListItem>
    );

    if (!feature) return item;

    return (
      <Tooltip
        placement="top"
        title={<FormattedMessage {...messages.upcoming_feature} />}
        arrow followCursor disableInteractive
      >
        <span>{item}</span>
      </Tooltip>
    );
  }
}

export default withStyles(styles)(SubMenuItem);
