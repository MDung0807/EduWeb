const client = {
    home: '/',
    signin: '/signin',
    signup: '/signup',
    passReset: '/passreset',
    subjects: '/subjects',
    topics: '/topics',
    wishlist: '/wishlist',
}

const admin = {
    homeAdmin: '/admin',
}
const routes = {
    ...client,
    ...admin
}

export default routes;