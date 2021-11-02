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
    let { disabled } = this.props;
    const { locked, selectionItems } = this.state;

    if (typeof disabled === 'function') disabled = disabled(selectionItems);

    return locked || selectionItems.length === 0 || disabled;
  }

  onClick = (e) => {
    this.props.onClick(e, this.state.selectionItems);
  }

  onChangeSelection = (selectionItems) => {
    this.setState({ selectionItems })
  }
}