/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import moment from 'moment';
import AbstractPage from "../AbstractPage";
import EnhancedTable from "../EnhancedTable";
import Notification from "../Notification";

import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

import Toolbar from '@material-ui/core/Toolbar';
import ReloadAction from "../actions/Reload";
import Chip from "@material-ui/core/Chip";

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageList extends AbstractPage {
  constructor(props) {
    super(props);
    this.state.searchTerm = '';
    this.addMessagingListener('changeSearchTerm', this.onChangeSearchTerm, this.moduleId);
  }

  get columns() {
    return [
      { id: 'id' },
      this.columnDateTime('created_at'),
      this.columnDateTime('updated_at'),
    ]
  }

  columnAvatar(id) {
    return { id: id || 'icon', width: 40, label: '', format: this.avatarFormat }
  }

  columnDateTime(id) {
    return { id: id || 'created_at', width: 175, format: this.dateTimeFormat }
  }

  get actions() {
    return [
      <ReloadAction moduleId={this.moduleId} onClick={this.onReload} />,
    ]
  }

  get apiPath() {
    return this.constructor.apiPath
  }

  boolFormat = (value, row, column) => {
    return <Checkbox checked={value} readOnly={true} disabled={true} />
  }

  dateTimeFormat = (value, row, column) => {
    return moment(value).format('YYYY-MM-DD HH:MM:SS');
  }

  avatarFormat = (value, row, column) => {
    return <Avatar src={value} />;
  }

  integrationFormat = (value, row, column) => {
    const { classes } = this.props;
    const integration = value;

    return (
      <Chip variant="outlined" color="primary" key={integration.id}
            avatar={<Avatar src={integration.icon} className={classes.smallAvatar} />}
            label={`${integration.name} of ${integration.channel_title}`} />
    );
  }

  renderAction = (action, idx) => {
    return <div key={idx}>{action}</div>
  }

  renderToolbar() {
    const { classes } = this.props;
    const actions = this.actions;

    if (actions.length === 0) return;

    return (
      <Toolbar disableGutters={true} className={classes.toolbar}>
        {actions.map(this.renderAction)}
      </Toolbar>
    )
  }

  render() {
    const { classes } = this.props;
    const { searchTerm } = this.state;

    return (
      <div className={classes.root}>
        {this.renderToolbar()}
        <Notification moduleId={this.moduleId} />
        <EnhancedTable columns={this.columns}
                       apiPath={this.apiPath}
                       moduleId={this.moduleId}
                       messages={this.messages} />
      </div>
    );
  }

  onChangeSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }

  onReload = (e) => {
    this.emitMessage('reload', null, this.moduleId);
  }

  onDelete = (e) => {
    this.emitMessage('delete', null, this.moduleId);
  }
}
