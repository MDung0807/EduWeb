import {
    Home,
    PasswordReset,
    SignIn,
    SignUp,
    Subjects,
    Topics,
} from '../pages/client'
import configs from '../configs'
import {ClientLayouts, AdminLayouts} from '../layouts';

const publicRoutes = [
    { path: configs.routes.home, component: Home, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.signin, component: SignIn, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.signup, component: SignUp, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.passReset, component: PasswordReset, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.subjects, component: Subjects, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.topics, component: Topics, layout: ClientLayouts, private: false, roles: []},
    { path: configs.routes.wishlist, component: Topics, layout: ClientLayouts, private: false, roles: []},

];

const privateRoutes= [
    {path: configs.routes.homeAdmin, component: Home, layout: AdminLayouts, private: true, roles: ['admin']},
]

const routes = [
    ...publicRoutes,
    ...privateRoutes
]

export default routes;