import ReactHtmlParser from 'react-html-parser';

import { getLanguage, PT_BR } from "storage";
import Texts from 'config/Texts';

export function toDate(value) {
    if (value) {
        value = parseInt(value, 10);
        return (new Date(value)).toLocaleDateString();
    }
    return "";
}

export function toDateExpiration(expiration) {
    const TEXTS = Texts.DATE_EXPIRATION;
    const months = expiration ? +parseInt(expiration) : null;
    if (months) {
        if (months === 1) {
            return `${months} ${TEXTS.ONE_MONTH}`;
        } else if (months > 1) {
            if (months >= 12) {
                const years = parseInt(months / 12);
                const years_months = parseInt(months % 12);
                let response = `${years} ${years === 1 ? TEXTS.ONE_YEAR : TEXTS.MANY_YEARS}`;
                if (years_months > 0) {
                    response += ` ${TEXTS.AND} ${years_months} ${years_months === 1 ? TEXTS.ONE_MONTH : TEXTS.MANY_MONTHS}`;
                }
                return response;
            }
            return `${months} ${TEXTS.MANY_MONTHS}`;
        }
    }
    return TEXTS.UNLIMITED;
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
    if (value) {
        value = ReactHtmlParser(value);
        if (twoTimes) {
            value = ReactHtmlParser(value);
        }
        return value;
    }
    return "";
}