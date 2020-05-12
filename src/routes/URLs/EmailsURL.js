import { BASE_URL } from './URLs';

export const EmailsURL = () => {
    const DEFAULT = 'emails/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    const sendTo = (base) => ({
        BASE: formatURL(base),
        SEND_TO_ALL: formatURL(base + 'all/'),
        SEND_TO_SINGLE: formatURL(base + 'single/'),
        SEND_TO_COURSE: formatURL(base + 'course/'),
        SEND_TO_NO_COURSE: formatURL(base + 'nocourse/'),
    });

    return {
        ROUTER: {
            BASE: formatURL(), // MOSTRA EMAILS
            SEND_TO: sendTo('to/'),
        },
        REDIRECT: {
            BASE: formatURL(), // MOSTRA EMAILS
            SEND_TO: sendTo('to/'), 
        }
    };
};
export default EmailsURL;