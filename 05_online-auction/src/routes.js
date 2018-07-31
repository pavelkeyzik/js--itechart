import MainContainer from '@/shared/containers/MainContainer';
import PageNotFound from '@/shared/components/PageNotFound';

import HomePage from '@/pages/HOME_PAGE';
import BidsPage from '@/pages/BIDS_PAGE';
import AuthPage from '@/pages/AUTH_PAGE';
import NewLotePage from '@/pages/NEW_LOTE_PAGE';

const routes = [
  {
    path: '/',
    component: AuthPage,
    exact: true,
  },
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
        path: '/app/new-lote',
        component: NewLotePage,
      },
      {
        component: PageNotFound,
      }
    ],
  },
  {
    component: PageNotFound,
  }
];

export default routes;