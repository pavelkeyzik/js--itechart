import Main from '@/shared/components/Main';
import PageNotFound from '@/shared/components/PageNotFound';

import HomePage from '@/pages/HOME_PAGE';
import BidsPage from '@/pages/BIDS_PAGE';

const routes = [
  {
    path: "/app",
    component: Main,
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
    component: PageNotFound,
  }
];

export default routes;