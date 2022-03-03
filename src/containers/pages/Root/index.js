/**
 *
 * Root
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { IntlProvider } from 'react-intl';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';

import localStorage from '../../../base/localStorage';
import routes from '../../../base/routes';
import buildTheme from '../../../styles/theme';
import Waiting from '../../../components/Waiting';
import AbstractComponent from '../../../components/AbstractComponent';

const enTranslationMessages = require('../../../translations/en.json');

export default class Root extends AbstractComponent {
  static propTypes = {
    store: PropTypes.instanceOf(Object).isRequired,
    history: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.addMessagingListener('applyTheme', this.onApplyTheme);
    this.state.theme = localStorage.get('theme', 'default');
  }

  onApplyTheme = (theme) => {
    this.setState({ theme });
    localStorage.set('theme', theme);
  }

  render() {
    const { store } = this.props;
    const { theme } = this.state;

    return (
      <Provider store={store}>
        <IntlProvider messages={enTranslationMessages} locale="en" defaultLocale="en">
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={buildTheme(theme)}>
              <CssBaseline />
              <Routes>
                {
                  routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={route.element}
                      exact={route.exact === true || route.exact === undefined}
                    />
                  ))
                }
              </Routes>
              <Waiting />
            </ThemeProvider>
          </StyledEngineProvider>
        </IntlProvider>
      </Provider>
    );
  }
}
