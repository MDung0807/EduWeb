import * as BaseAPI from './BaseAPI';

export const getProfile = () => {
    return BaseAPI.getItems(profileService.profile);
}

const profileService = {
    profile: 'profile'
}