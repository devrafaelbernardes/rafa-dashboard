import { BASE_URL } from './URLs';

export const ErrorURL = () => {
    const DEFAULT = 'error/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};
export default ErrorURL;