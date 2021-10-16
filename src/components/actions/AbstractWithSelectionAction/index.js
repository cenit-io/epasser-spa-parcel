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
    this.addMessagingListener('changeSelection', this.onChangeSelection)
  }

  get disabled() {
    const { locked, selectionItems: { length } } = this.state;
    return locked || length === 0;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems);
  }

  onChangeSelection = (selectionItems) => {
    this.setState({ selectionItems })
  }
}