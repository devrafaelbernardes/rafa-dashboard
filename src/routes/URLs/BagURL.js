import { BASE_URL } from './URLs';

export const BagURL = () => {
    const DEFAULT = 'bag/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;
    return {
        ROUTER : {
            BASE : formatURL(),
            BAG : formatURL("info/:id"),
            ADD : formatURL("add/"),
            UPDATE : formatURL("update/:id"),
            UPDATE_POSITION : formatURL("position/"),
        },
        REDIRECT : {
            BASE : formatURL(),
            BAG : (id) => formatURL(`info/${id}`),
            ADD : formatURL("add/"),
            UPDATE : (id) => formatURL(`update/${id}`),
            UPDATE_POSITION : formatURL("position/"),
        }
    };
};
export default BagURL;