import { BASE_URL } from './URLs';

export const ProfileURL = () => {
    const DEFAULT = 'profile/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;
    return {
        ROUTER : {
            BASE : formatURL(),
            UPDATE : formatURL("info/"),
            UPDATE_PASSWORD : formatURL("password/"),
        },
        REDIRECT : {
            BASE : formatURL(),
            UPDATE : formatURL("info/"),
            UPDATE_PASSWORD : formatURL("password/"),
        }
    };
};
export default ProfileURL;