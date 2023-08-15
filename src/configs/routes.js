const client = {
    home: '/',
    login: '/login',
    register: '/register',
    subjects: '/subjects',
}

const admin = {
    homeAdmin: '/admin',
}
const routes = {
    ...client,
    ...admin
}

export default routes;