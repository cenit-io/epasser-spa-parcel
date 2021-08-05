import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './containers/pages/Root';
import history from './base/history';
import configureStore from './store';

const store = configureStore(undefined, history);

// eslint-disable-next-line no-undef
ReactDOM.render(<Router><Root store={store} history={history} /></Router>, document.querySelector('#root'));
