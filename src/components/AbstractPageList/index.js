/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import moment from 'moment';
import AbstractPage from "../AbstractPage";
import ResourcesDataGrid from "../ResourcesDataGrid";
import Notification from "../Notification";

import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';

/* eslint class-methods-use-this: ["off"] */
export default class AbstractPageList extends AbstractPage {
  constructor(props) {
    super(props);
    this.state.searchTerm = '';
    this.addMessagingListener('changeSearchTerm', this.onChangeSearchTerm, this.moduleId);
  }

  get fields() {
    return [
      { id: 'id' },
      { id: 'created_at' },
      { id: 'updated_at' },
    ]
  }

  get apiPath() {
    return this.constructor.apiPath
  }

  boolFormat(value, row, field) {
    return <Checkbox checked={value} readOnly={true} disabled={true} />
  }

  dateTimeFormat(value, row, field) {
    return moment(value).format('YYYY-MM-DD HH:MM:SS');
  }

  iconFormat(value, row, field) {
    return <Avatar src={value} />;
  }

  render() {
    const { classes } = this.props;
    const { searchTerm } = this.state;

    return (
      <div className={classes.root}>
        <Notification namespace={this.moduleId} />
        <ResourcesDataGrid fields={this.fields}
                           apiPath={this.apiPath}
                           namespase={this.moduleId}
                           messages={this.messages} />
      </div>
    );
  }

  onChangeSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }
}
