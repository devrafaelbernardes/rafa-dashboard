import { BASE_URL } from './URLs';

export const SocialNetworkURL = () => {
    const DEFAULT = 'socialNetwork/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;
    return {
        ROUTER : {
            BASE : formatURL(),
            ADD : formatURL("add/"),
            UPDATE_POSITION : formatURL("position/"),
        },
        REDIRECT : {
            BASE : formatURL(),
            ADD : formatURL("add/"),
            UPDATE_POSITION : formatURL("position/"),
        }
    };
};
export default SocialNetworkURL;