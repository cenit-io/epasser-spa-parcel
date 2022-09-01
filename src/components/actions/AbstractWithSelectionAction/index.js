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
    const { multiSelection = this.constructor.multiSelection } = this.props;
    return multiSelection !== false;
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

  get selection() {
    const { selectionItems } = this.state;
    return this.multiSelection ? selectionItems : selectionItems[0];
  }

  onClick = (e) => {
    const { onClick } = this.props;
    onClick && onClick(e, this.selection);
  }

  onChangeSelection = (selectionItems) => {
    this.setState({ selectionItems });
  }
}
