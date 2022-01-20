export const isDevelopment = process.env.NODE_ENV === "development";

// -------------- INFOS --------------
export const SITE_NAME = "Rafael Bernardes";


// -------------- LINKS --------------
export const LINK_EAD = isDevelopment ? "http://localhost:3020/" : "https://ead.rafaelbernardes.com/";
export const LINK_ACCESS_COURSE = `${LINK_EAD}access/`;