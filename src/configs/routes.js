const client = {
    home: '/',
    signin: '/signin',
    signup: '/signup',
    passReset: '/passreset',
}

const admin = {
    homeAdmin: '/admin',
}
const routes = {
    ...client,
    ...admin
}

export default routes;