/**
 *
 * BoardModules
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import AbstractComponent from '../AbstractComponent';

import SubMenuItem from '../SubMenuItem';

export default class BoardModules extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  renderTitle() {
    return (
      <Typography variant="h5" color="primary">
        <FormattedMessage {...this.title} />
      </Typography>
    );
  }

  renderSubMenuItem(item) {
    const title = item.title || item.messages.title;
    return <SubMenuItem key={item.id} icon={item.icon} title={title} onClick={this.onTapItem(item)} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card variant="outlined" className={classes.card}>
          <CardHeader title={this.renderTitle()} />
          <Divider />
          <CardContent>
            <List>
              {this.modules.map((el) => this.renderSubMenuItem(el))}
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }

  onTapItem = (item) => () => this.emitMessage('openModule', item.id, 'MainTabs')
}
