/* eslint import/no-named-as-default: ["off"] */
import NotFound from '../containers/pages/NotFound';
import SignIn from '../containers/pages/SignIn/loadable';
import Main from '../containers/pages/Main/loadable';

const routes = [
  { path: '/', component: Main },
  { path: '/sign/in', component: SignIn },

  { path: '*', component: NotFound },
];

export default routes;
