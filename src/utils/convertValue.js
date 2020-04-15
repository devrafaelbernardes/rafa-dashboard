import ReactHtmlParser from 'react-html-parser';

import { getLanguage, PT_BR } from "storage";

export function toDate(value) {
    if (value) {
        value = parseInt(value, 10);
        return (new Date(value)).toLocaleDateString();
    }
    return "";
}

export function toFullDate(value) {
    if (value) {
        value = parseInt(value, 10);
        return (new Date(value)).toLocaleString();
    }
    return "";
}

export function toMoney(value) {
    var language = getLanguage();
    if (value === undefined || value === null || value === "") {
        value = 0.00;
    }
    return (value).toLocaleString(language.language, { style: 'currency', currency: language.currency || PT_BR.currency });
}

export function toHTML(value, twoTimes = true) {
    if(value){
        value = ReactHtmlParser(value);
        if(twoTimes){
            value = ReactHtmlParser(value);
        }
        return value;
    }
    return "";
}