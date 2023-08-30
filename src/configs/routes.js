const client = {
    home: '/',
    signin: '/signin',
    signup: '/signup',
    passReset: '/passreset',
    subjects: '/subjects',
    topics: '/topics',
    wishlist: '/wishlist',
    quizzes: '/quizzes',
    profile: '/profile',
    history: '/history',
    transcript: '/transcript',
    subjectDetail: '/subjects/:subjectId',
    topicDetail: '/topics/:topicId',
    aboutMe: '/aboutme',
}

const admin = {
    homeAdmin: '/admin',
}
const routes = {
    ...client,
    ...admin
}

export default routes;