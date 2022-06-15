/**
 *
 * BoardModules
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

import Tooltip from '@mui/material/Tooltip';
import session from '../../base/session';
import styles from './styles.jss';

import AbstractComponent from '../AbstractComponent';
import SubMenuItem from '../SubMenuItem';
import messages from '../MainPageHeader/messages';

class BoardModules extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    modules: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)])).isRequired,
    title: PropTypes.instanceOf(Object).isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  static defaultProps = {
    width: 'auto',
    height: 'auto',
  };

  renderTitle() {
    const { title } = this.props;

    return (
      <Typography variant="h5" color="primary">
        <FormattedMessage {...title} />
      </Typography>
    );
  }

  renderSubMenuItem(item) {
    if (typeof item === 'string') return <SubMenuItem key={item} title={item} feature />;
    return (
      <SubMenuItem
        key={item.id}
        icon={item.icon}
        title={item.title || item.messages.title}
        onClick={this.onTapItem(item)}
      />
    );
  }

  render() {
    const { classes, modules } = this.props;

    return (
      <div className={classes.root}>
        <Card variant="outlined" className={classes.card}>
          <CardHeader title={this.renderTitle()} />
          <Divider />
          <CardContent>
            <List component="div">
              {modules.map((el) => this.renderSubMenuItem(el))}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }

  onTapItem = (item) => {
    if (!this.isAccessible(item.id)) return null;
    return () => this.emitMessage('openModule', item.id, this.mainModuleId);
  }
}

export default withStyles(styles)(BoardModules);
