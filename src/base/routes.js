/* eslint import/no-named-as-default: ["off"] */
import React from 'react';

import NotFound from '../containers/pages/NotFound';
import Main from '../containers/pages/Main/loadable';

const routes = [
  { path: '/', element: <Main /> },

  { path: '*', element: <NotFound /> },
];

export default routes;
