import axios from 'axios';

//Base URL
const instance = axios.create({
    baseURL: 'http://localhost:8000',
});

//Setup add JWT on header request
instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;


instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default instance;
