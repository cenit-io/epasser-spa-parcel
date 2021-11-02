/**
 *
 * SelectBoxTopic
 *
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { request } from "../../../../base/request";

import messages from './messages';
import styles from './styles.jss';

import AbstractField from "../AbstractField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { CircularProgress } from "@material-ui/core";

class SelectBoxTopic extends AbstractField {
  static apiPath = 'webhooks/topics';

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.items = [];
    this.state.value = props.value;

    this.addMessagingListener('loadItemsSuccessful', this.onLoadItemsSuccessful, this.componentId);
    this.addMessagingListener('loadItemsFailed', this.onLoadItemsFailed, this.componentId);
  }

  get label() {
    if (this.state.alreadyLoaded) return <FormattedMessage {...messages.label} />;

    return <CircularProgress size="1em" thickness={3} color="secondary" />;
  }

  loadItems = () => {
    this.startWaiting(0);

    const options = {
      url: this.apiPath,
      method: 'GET',
    };

    request(options).then((response) => {
      this.emitMessage('loadItemsSuccessful', response, this.componentId);
    }).catch(error => {
      this.emitMessage('loadItemsFailed', error, this.componentId);
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  renderItem = (item, idx) => {
    return (
      <MenuItem value={item.topic} key={idx}>
        <ListItemText primary={item.title} />
      </MenuItem>
    )
  }

  renderField() {
    const { readOnly } = this.props;
    const { alreadyLoaded, value, items } = this.state;

    if (!alreadyLoaded) this.loadItems();

    const { classes } = this.props;
    const componentId = this.componentId;
    const labelId = `${componentId}-label`;

    return (
      <Select id={componentId} labelId={labelId} label={this.label} value={value}
              classes={{ select: classes.selectBox }}
              readOnly={readOnly}
              disabled={readOnly || !alreadyLoaded}
              onChange={this.onChange}>
        {items.map(this.renderItem)}
      </Select>
    );
  }

  onLoadItemsSuccessful = (response) => {
    this.setState({ alreadyLoaded: true, items: response.data });
  }

  onLoadItemsFailed = (error) => {
    const { onError } = this.props;
    this.setState({ alreadyLoaded: true, items: [] });
    onError && onError(error);
  }
}

export default withStyles(styles)(SelectBoxTopic);
