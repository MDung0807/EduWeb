import * as BaseAPI from './BaseAPI';

export const signIn =async (data) => {
    // try{
    //     const response = await postItem(AuthAPI.signin, data)
    //     console.log(response.data)
    //     return response.data     
    // }
    // catch{
    //     return null
    // }

    return await BaseAPI.postItem(AuthAPI.signin, data)
}

const AuthAPI = {
    signin: 'auth/login',
    signup: 'auth/register',
    resetPassword: 'auth/reset'
}
