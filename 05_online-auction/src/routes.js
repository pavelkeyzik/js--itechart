import MainContainer from './shared/containers/MainContainer';
import PageNotFound from './shared/components/PageNotFound';
import CheckAuthorizationComponent from './shared/components/CheckAuthorizationComponent';

import HomePage from './pages/HOME_PAGE';
import BidsPage from './pages/BIDS_PAGE';
import AuthPage from './pages/AUTH_PAGE';
import NewLotePage from './pages/NEW_LOTE_PAGE';
import PersonalInfoPage from './pages/PERSONAL_INFO_PAGE';

import RegistrationContainer from './shared/containers/RegistrationContainer';
import AuthorizationContainer from './shared/containers/AuthorizationContainer';

const routes = [
  {
    path: '/',
    component: CheckAuthorizationComponent,
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
        adminOnly: true,
        component: NewLotePage,
      },
      {
        path: '/app/personal-info',
        component: PersonalInfoPage,
      },
      {
        component: PageNotFound,
      }
    ],
  },
  {
    path: '/auth',
    component: AuthPage,
    routes: [
      {
        path: '/auth',
        component: AuthorizationContainer,
        exact: true,
      },
      {
        path: '/auth/registration',
        component: RegistrationContainer
      }
    ]
  },
  {
    component: PageNotFound,
  }
];

export default routes;