/**
 *
 * SelectBoxChannel
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

class SelectBoxChannel extends AbstractField {
  static apiPath = 'available/integrations/channels';

  constructor(props) {
    super(props);
    this.state.alreadyLoaded = false;
    this.state.items = [];
    this.state.value = props.value;

    this.addMessagingListener('loadItemsSuccessful', this.onLoadItemsSuccessful);
    this.addMessagingListener('loadItemsFailed', this.onLoadItemsFailed);
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
      this.emitMessage('loadItemsSuccessful', response);
    }).catch(error => {
      this.emitMessage('loadItemsFailed', error);
    }).finally(() => {
      this.releaseWaiting();
    });
  }

  renderItem = (item, idx) => {
    const { classes } = this.props;

    return (
      <MenuItem value={item.name} key={idx}>
        <ListItemIcon>
          <Avatar src={item.icon} className={classes.smallAvatar} />
        </ListItemIcon>
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

export default withStyles(styles)(SelectBoxChannel);
