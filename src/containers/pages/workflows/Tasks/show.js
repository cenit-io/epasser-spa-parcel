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
import Avatar from '@mui/material/Avatar';
import FormGroup from '@mui/material/FormGroup';
import Chip from '@mui/material/Chip';

import messages from './messages';
import settings from './settings';
import styles from './styles.jss';
import color from '../../../../components/formats/TaskStatusFormat/color';

import AbstractPageDetails from '../../../../components/AbstractPageDetails';
import CustomSection from '../../../../components/sections/CustomSection';
import TaskExecutions from '../../../../components/sections/TaskExecutions';
import TaskNotifications from '../../../../components/sections/TaskNotifications';
import ActList from '../../../../components/actions/List';
import ActReload from '../../../../components/actions/Reload';

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

  get loadItemOptions() {
    return { skipOpenTasksModule: true };
  }

  get actions() {
    const { moduleId } = this;

    return (
      <>
        <ActReload moduleId={moduleId} onClick={this.onReload} />
        <ActList moduleId={moduleId} />
      </>
    );
  }

  renderStatusIcon(value) {
    return (
      <Avatar sx={{ bgcolor: color(value) }} aria-label={value}>
        {value[0].toUpperCase()}
      </Avatar>
    );
  }

  renderStatus(value) {
    const { classes } = this.props;

    return (
      <Chip
        className={classes.status}
        sx={{ color: color(value) }}
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
      <>
        <CustomSection title={messages.taskDetails}>
          <Card className={classes.withoutShadow}>
            <CardHeader
              avatar={this.renderStatusIcon(item.status)}
              title={<FormattedMessage {...messages.field_description} />}
              subheader={item.description}
              action={this.renderStatus(item.status)}
            />
          </Card>
        </CustomSection>
        <FormGroup className={classes.col3}>
          <TaskExecutions task={item} />
        </FormGroup>
        <FormGroup className={classes.col3}>
          <TaskNotifications task={item} />
        </FormGroup>
      </>
    );
  }

  onReload = () => this.setState({ alreadyLoaded: false });
}

export default withStyles(styles)(Show);
