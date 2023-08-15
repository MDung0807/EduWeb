import {Home} from '../pages/client'
import configs from '../configs'
import {ClientLayouts, AdminLayouts} from '../layouts';

const publicRoutes = [
    { path: configs.routes.home, component: Home, layout: ClientLayouts, private: false, roles: []}
];

const privateRoutes= [
    {path: configs.routes.homeAdmin, component: Home, layout: AdminLayouts, private: true, roles: ['admin']},
]

const routes = [
    ...publicRoutes,
    ...privateRoutes
]

export default routes;