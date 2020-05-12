import { BASE_URL } from './URLs';

export const StudentsURL = () => {
    const DEFAULT = 'students/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    return {
        ROUTER : {
            BASE : formatURL(),
            NO_COURSE : formatURL('hasNoCourse/'),
            HAS_COURSE : formatURL('hasCourse/'),
        },
        REDIRECT : {
            BASE : formatURL(),
            NO_COURSE : formatURL('hasNoCourse/'),
            HAS_COURSE : formatURL('hasCourse/'),
        }
    };
};
export default StudentsURL;