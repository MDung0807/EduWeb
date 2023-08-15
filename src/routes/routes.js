import {Home} from '../pages/client'
import configs from '../configs'
import {ClientLayouts, AdminLayouts} from '../layouts';

const publicRoutes = [
    { path: configs.routes.home, component: Home, layout: ClientLayouts, private: false, roles: []}
];

const privateRoutes= [
    {}
]

const routes = [
    ...publicRoutes,
    ...privateRoutes
]

export default routes;