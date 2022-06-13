/**
 *
 * MainPageHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import styles from './styles.jss';

import AbstractComponent from '../AbstractComponent';

class MainPageHeader extends AbstractComponent {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    moduleId: PropTypes.string.isRequired,
  }

  static defaultProps = { onClose: null }

  constructor(props) {
    super(props);
    this.state = { settings: null };
    this.setMessagingListener('openModule', this.onOpenModule, this.mainModuleId);
    this.onOpenModule(props.moduleId);
  }

  onSetTabSettings = (settings) => this.setState({ settings })

  render() {
    const { settings } = this.state;
    const { icon: Icon, messages: { title } = {} } = settings || {};

    return (
      <CardHeader
        titleTypographyProps={{ variant: 'body1' }}
        avatar={Icon ? <Icon fontSize="small" /> : null}
        title={title ? <FormattedMessage {...title} /> : '...'}
        action={this.actions}
      />
    );
  }

  onOpenModule = (moduleId) => {
    this.setMessagingListener('setTabSettings', this.onSetTabSettings, moduleId);
  }
}

export default withStyles(styles)(MainPageHeader);
