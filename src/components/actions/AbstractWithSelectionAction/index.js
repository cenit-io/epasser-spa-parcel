/**
 *
 * AbstractWithSelectionAction
 *
 */

import AbstractAction from '../AbstractAction';

export default class AbstractWithSelectionAction extends AbstractAction {
  constructor(props) {
    super(props);
    this.state.selectionItems = props.items || [];
    this.setMessagingListener('changeSelection', this.onChangeSelection);
  }

  get multiSelection() {
    return this.constructor.multiSelection !== false;
  }

  get disabled() {
    const { locked, selectionItems } = this.state;
    const { multiSelection } = this;
    let { disabled } = this.props;

    if (typeof disabled === 'function') {
      disabled = (selectionItems.length > 0) && disabled(multiSelection ? selectionItems : selectionItems[0]);
    }

    return locked || disabled
      || (multiSelection && selectionItems.length === 0)
      || (!multiSelection && selectionItems.length !== 1);
  }

  onClick = (e) => {
    this.props.onClick(e, this.multiSelection ? this.state.selectionItems : this.state.selectionItems[0]);
  }

  onChangeSelection = (selectionItems) => {
    this.setState({ selectionItems });
  }
}
