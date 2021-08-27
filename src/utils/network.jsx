import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
});

export const getAPIRecourse = async () => {
    try {
        const res = await instance.get('character');
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
