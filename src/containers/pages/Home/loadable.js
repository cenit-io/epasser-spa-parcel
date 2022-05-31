/**
 *
 * Asynchronously loads the component for Keke
 *
 */

import Loadable from 'react-loadable';
import Loading from '../../../components/Loading';

const Home = import('./index');

export default Home;
// export default Loadable({ id: 'Home', loader: () => import('./index'), loading: Loading });
// export default Loadable.Map({
//   id: 'Home',
//   loading: Loading,
//   loader: {
//     Home: () => import('./index'),
//   },
//   render(loaded, props) {
//     const Home = loaded.Home.default;
//
//     // eslint-disable-next-line react/react-in-jsx-scope
//     return <Home {...props} />;
//   },
// });
