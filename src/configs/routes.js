const client = {
    home: '/',
    signin: '/signin',
    signup: '/signup',
    forgotPass: '/forgotpass',
}

const admin = {
    homeAdmin: '/admin',
}
const routes = {
    ...client,
    ...admin
}

export default routes;