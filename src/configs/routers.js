const client = {
    home: '/',
    login: '/login',
    register: '/register',
    subjects: '/subjects',
}

const admin = {
    homeAdmin: '/admin',
}
const routers = {
    ...client,
    ...admin
}

export default routers;