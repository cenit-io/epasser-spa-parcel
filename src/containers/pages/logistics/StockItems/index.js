/**
 *
 * StockItems
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { createStructuredSelector } from 'reselect';
import styles from '../../../../styles';
import messages from './messages';
import AbstractPage from '../../AbstractPage';
import makeSelectSignIn from '../../SignIn/selectors';

import Typography from '@material-ui/core/Typography';
import StockItemsIcon from "@material-ui/icons/Widgets";

export class StockItems extends AbstractPage {
  static propTypes = {
    classes: PropTypes.instanceOf(Object).isRequired,
    signInState: PropTypes.instanceOf(Object).isRequired,
  }

  static id = 'StockItems';
  static title = messages.title;
  static icon = StockItemsIcon;

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography paragraph>
          <FormattedMessage {...messages.title} />
          TODO: ....
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signInState: makeSelectSignIn(),
});

const mapDispatchToProps = (dispatch) => ({ dispatch });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(withStyles(styles)(StockItems));
