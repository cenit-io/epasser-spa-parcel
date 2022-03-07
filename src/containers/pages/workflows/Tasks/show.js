/**
 *
 * Flows/Show
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { withStyles } from '@mui/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FormGroup from '@mui/material/FormGroup';
import Chip from '@mui/material/Chip';

import messages from './messages';
import settings from './settings';
import styles from './styles.jss';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import ListAction from '../../../../components/actions/List';
import ReloadAction from '../../../../components/actions/Reload';

class Show extends AbstractPageDetails {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
  }

  static id = `${settings.id}/Show`;

  static icon = settings.icon;

  static messages = settings.messages;

  get apiPath() {
    return `${settings.apiPath}/${this.state.item.id}`;
  }

  get actions() {
    return (
      <>
        <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />
        <ListAction moduleId={this.moduleId} onClick={this.onBackToList} />
      </>
    );
  }

  renderStatusIcon(value) {
    return (
      <Avatar sx={{ bgcolor: settings.color(value) }} aria-label={value}>
        {value[0].toUpperCase()}
      </Avatar>
    );
  }

  renderStatus(value) {
    const { classes } = this.props;

    return (
      <Chip
        className={classes.status}
        sx={{ color: settings.color(value) }}
        variant="filled"
        label={messages[value] ? <FormattedMessage {...messages[value]} /> : value}
      />
    );
  }

  renderContent() {
    const { classes } = this.props;
    const { alreadyLoaded, item } = this.state;

    if (!alreadyLoaded) return this.emitMessage('startLoadItem');

    return (
      <fieldset className={classes.formSection}>
        <legend><FormattedMessage {...messages.taskDetails} /></legend>
        <Card className={classes.details}>
          <CardHeader
            avatar={this.renderStatusIcon(item.status)}
            title={<FormattedMessage {...messages.field_description} />}
            subheader={item.description}
            action={this.renderStatus(item.status)}
          />
          <CardContent>
            <FormGroup className={classes.col3}>
              <fieldset className={classes.formSection}>
                <legend><FormattedMessage {...messages.executions} /></legend>
                <span>TODO: ....</span>
              </fieldset>
            </FormGroup>
            <FormGroup className={classes.col3}>
              <fieldset className={classes.formSection}>
                <legend><FormattedMessage {...messages.notifications} /></legend>
                <span>TODO: ....</span>
              </fieldset>
            </FormGroup>
          </CardContent>
        </Card>
      </fieldset>
    );
  }

  onReload = () => this.setState({ alreadyLoaded: false });
}

export default withStyles(styles)(Show);
