/**
 *
 * Root
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { IntlProvider } from 'react-intl';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import routes from '../../../base/routes';
import theme from '../../../styles/theme';
import Waiting from '../../../components/Waiting';

const enTranslationMessages = require('../../../translations/en.json');

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.instanceOf(Object).isRequired,
    history: PropTypes.instanceOf(Object).isRequired,
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <IntlProvider messages={enTranslationMessages} locale="en" defaultLocale="en">
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Router history={history}>
              <Switch>
                {
                  routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      component={route.component}
                      exact={route.exact === true || route.exact === undefined}
                    />
                  ))
                }
              </Switch>
            </Router>
            <Waiting />
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}
