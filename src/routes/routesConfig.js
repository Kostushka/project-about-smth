import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';
import NotFoundPage from '@containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePageContainer,
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePageContainer,
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPage,
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage,
    },
];

export default routesConfig;
