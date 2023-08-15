import {Home} from '../pages/client'
import configs from '../configs'
import {ClientLayouts, AdminLayouts} from '../layouts';

const publicRoutes = [
    { path: configs.routers.home, component: Home, layout: ClientLayouts, private: false, roles: []}
];

const privateRoutes= [
    {}
]

const routers = {
    ...publicRoutes,
    ...privateRoutes
}

export default routers;