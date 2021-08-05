/* eslint import/no-named-as-default: ["off"] */
import NotFound from './NotFound';
import SignIn from './SignIn/loadable';
import Main from './Main/loadable';
import AvailableIntegrations from './integrations/AvailableIntegrations/loadable';

const routes = [
  { path: '/', component: Main },
  { path: '/sign/in', component: SignIn },
  { path: '/available/integrations', component: AvailableIntegrations },

  { path: '*', component: NotFound },
];

export default routes;
