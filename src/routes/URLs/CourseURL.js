import { BASE_URL } from './URLs';

export const CourseURL = (id = "") => {
    const DEFAULT = 'course/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    const videos = (base) => ({
        BASE : `${base}`,
        ADD : `${base}add/`,
        EDIT : (videoId = null) => `${base}edit/${videoId || ":videoId"}`,
        VIEW : (videoId = null) => `${base}view/${videoId || ":videoId"}`,
    });

    const students = (base) => ({
        BASE : `${base}`,
        ADD : `${base}add/`,
    });

    const materials = (base) => ({
        BASE : `${base}`,
        ADD : `${base}add/`,
    });

    const createAccess = (base) => ({
        BASE : `${base}`,
        ADD : `${base}add/`,
    });

    const course = (base) => {
        base = `${base}/`;
        return ({
            BASE: formatURL(base),
            CREATE_ACCESS: createAccess(formatURL(`${base}createAccess/`)),
            VIDEOS: videos(formatURL(`${base}videos/`)),
            STUDENTS: students(formatURL(`${base}students/`)),
            MATERIALS: materials(formatURL(`${base}materials/`)),
            SETTINGS: formatURL(`${base}settings/`),
        })
    };

    return {
        ROUTER: course(`:id`),
        REDIRECT: course(id),
    };
};
export default CourseURL;