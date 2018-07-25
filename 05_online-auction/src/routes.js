import Main from '@/containers/Main';
import PageNotFound from '@/components/PageNotFound';
import PersonalArea from '@/containers/PersonalArea';
import BidsPage from '@/containers/BidsPage';

const routes = [
  {
    path: "/app",
    component: Main,
    routes: [
      {
        path: '/app/',
        component: PersonalArea,
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