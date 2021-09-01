import {
    // BASEURL,
    // IMG_EXTENSION,
    // PEOPLE_DATA,
    // URL_IMG_PERSON,
    PARAM_PAGE,
} from '@constants/api';

// // const getId = (url, category) => {
// //     const id = url.replace(BASEURL + category, '').replace(/\//g, '');
// //     return id;
// // };

// // export const getPeopleId = (url) => getId(url, PEOPLE_DATA);

// export const getPeopleImg = (id) => `${URL_IMG_PERSON}/${id + IMG_EXTENSION}`;

export const getPeoplePageId = (url) => {
    const pos = url.lastIndexOf(PARAM_PAGE);
    const pageId = url.slice(pos + PARAM_PAGE.length, url.length);
    return Number(pageId);
};
