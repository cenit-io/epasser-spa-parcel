/**
 *
 * AbstractPage
 *
 */

import React from 'react';
import AbstractPage from "../AbstractPage";
import ResourcesDataGrid from "../ResourcesDataGrid";

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

  render() {
    const { classes } = this.props;
    const { searchTerm } = this.state;

    return (
      <div className={classes.root}>
        <ResourcesDataGrid fields={this.fields} messages={this.messages} />
      </div>
    );
  }

  onChangeSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }
}
