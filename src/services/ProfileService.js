import * as BaseAPI from './BaseAPI';

export const getProfile = () => {
    return BaseAPI.getItems('/profile');
}