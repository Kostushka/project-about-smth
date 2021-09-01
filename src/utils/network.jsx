import axios from 'axios';
// import {PARAM_PAGE} from '@constants/api.js'

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
    // baseURL: 'https://swapi.dev/api/',
});

/**
 * Отправляет ajax запрос
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с  результатом запроса
 */
export const getAPIRecourse = async (url) => {
    try {
        const res = await instance.get(url);
        // const res = await instance.get('people');
        return await res.data;
    } catch (error) {
        console.error('Could not get.', error.message);
        return false;
    }
};

// getAPIRecourse().then((res) => console.log(res));

// (async () => {
//     const body = await getAPIRecourse();
// })();
