import Auth from "../pages/Auth";

interface PublicRouteObject {
    exact: boolean
    path: string
    component: any
    title: string
}

interface PrivateRouteObject extends PublicRouteObject {
    breadcrumb: string
}

const PUBLIC_ROUTES: PublicRouteObject[] = [
    {
        exact: true,
        title: 'Login',
        path: '/',
        component: Auth
    },
]

const PRIVATE_ROUTES: PrivateRouteObject[] = [

]

export default { PRIVATE_ROUTES, PUBLIC_ROUTES }