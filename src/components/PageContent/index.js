/**
 *
 * PageTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles';
import Notification from '../../containers/Notification';

class PageContent extends React.Component {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    style: PropTypes.instanceOf(Object),
    children: PropTypes.node,
  }

  static defaultProps = { children: null, style: null };

  render() {
    const { classes, children, style } = this.props;

    return (
      <div className={classes.topBox} style={style}>
        <Notification />
        <div>{children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(PageContent);
