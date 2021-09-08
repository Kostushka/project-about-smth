import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';
import NotFoundPage from '@containers/NotFoundPage';
import PersonPage from '@containers/PersonPage';
import FavoritesPageContainer from '@containers/FavoritesPage';
import SearchPageContainer from '@containers/SearchPage';

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
        path: '/people/:id',
        exact: true,
        component: PersonPage,
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritesPageContainer,
    },
    {
        path: '/search',
        exact: true,
        component: SearchPageContainer,
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
