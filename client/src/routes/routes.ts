import Auth from '../pages/Auth';
import Home from '../pages/Home';

interface PublicRouteObject {
  exact: boolean;
  path: string;
  component: any;
  title: string;
}

interface PrivateRouteObject extends PublicRouteObject {
  breadcrumb?: string;
}

const PUBLIC_ROUTES: PublicRouteObject[] = [
  {
    exact: true,
    title: 'Login',
    path: '/',
    component: Home,
  },
];

const PRIVATE_ROUTES: PrivateRouteObject[] = [
  {
    exact: true,
    title: 'Home',
    path: '/auth',
    component: Home,
  },
];

const routes = { PRIVATE_ROUTES, PUBLIC_ROUTES };

export default routes;
