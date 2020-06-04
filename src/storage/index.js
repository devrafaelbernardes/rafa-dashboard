import Cookies from 'universal-cookie';

const cookies = new Cookies();
const TIME_EXPIRES_COOKIE = 31536000000; // 365 * (24 * 60 * 60 * 1000), SEGUNDOS DE UM ANO
const LOGIN = "rb_adms_t";
const LANGUAGE = "rb_adms_l";
const PATH_COOKIE = '/';

export const get = (key) => cookies.get(key);
export const set = (key, value) => cookies.set(key, value, { path: PATH_COOKIE, expires: new Date(Date.now() + TIME_EXPIRES_COOKIE) });
export const remove = (key) => cookies.remove(key, { path: PATH_COOKIE, expires: new Date(Date.now() + TIME_EXPIRES_COOKIE) });

// --------------- TOKEN ACCESS ---------------
export const getToken = () => get(LOGIN);
export const isAuthenticated = () => get(LOGIN) ? true : false;
export const setToken = (value) => set(LOGIN, value);
export const clearToken = () => remove(LOGIN);


// --------------- LANGUAGE ---------------
export const PT_BR = { language: "pt-BR", currency: "BRL" };
export const USD = { language: "en-US", currency: "USD" };


export const setLanguage = (data) => {
    return set(LANGUAGE, JSON.stringify(data));
}

export const getLanguage = () => {
    var language = get(LANGUAGE);
    if (language === PT_BR) {
        return language;
    } else {
        setLanguage(PT_BR);
    }
    return get(LANGUAGE);
}