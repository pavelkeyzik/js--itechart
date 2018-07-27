import MainContainer from '@/shared/containers/MainContainer';
import PageNotFound from '@/shared/components/PageNotFound';

import HomePage from '@/pages/HOME_PAGE';
import BidsPage from '@/pages/BIDS_PAGE';
import AuthPage from '@/pages/AUTH_PAGE';

const routes = [
  {
    path: "/app",
    component: MainContainer,
    routes: [
      {
        path: '/app/',
        component: HomePage,
        exact: true,
      },
      {
        path: "/app/bids",
        component: BidsPage,
      },
      {
        component: PageNotFound,
      }
    ],
  },
  {
    path: '/auth',
    component: AuthPage,
  },
  {
    component: PageNotFound,
  }
];

export default routes;