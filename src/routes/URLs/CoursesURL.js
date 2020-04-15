import { BASE_URL } from './URLs';

export const CoursesURL = () => {
    const DEFAULT = 'courses/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    return {
        ROUTER : {
            BASE : formatURL(),
            ADD : formatURL("add/"),
        },
        REDIRECT : {
            BASE : formatURL(),
            ADD : formatURL("add/"),
        }
    };
};
export default CoursesURL;