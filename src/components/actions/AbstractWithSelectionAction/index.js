/**
 *
 * AbstractWithSelectionAction
 *
 */

import React from 'react';
import AbstractAction from "../AbstractAction";

export default class AbstractWithSelectionAction extends AbstractAction {
  constructor(props) {
    super(props);
    this.state.selectionItems = [];
    this.addMessagingListener('changeSelection', this.onChangeSelection, props.moduleId)
  }

  get disabled() {
    return this.state.selectionItems.length === 0;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems);
  }

  onChangeSelection = (selectionItems) => {
    this.setState({ selectionItems })
  }
}