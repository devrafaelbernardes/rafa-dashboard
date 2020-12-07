import { BASE_URL } from './URLs';

export const ModelingURL = () => {
    const DEFAULT = 'modeling/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;
    return {
        ROUTER : {
            BASE : formatURL(),
            ADD : formatURL("add/"),
            SEND_EMAIL : formatURL("emails/:id"),
        },
        REDIRECT : {
            BASE : formatURL(),
            ADD : formatURL("add/"),
            SEND_EMAIL : (id) => formatURL(`emails/${id}`),
        }
    };
};
export default ModelingURL;