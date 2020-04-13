import axios from 'axios';

export default axios.create({
    baseURL: 'https://swapi.co/api',
    // headers: {
    //     'Access-Control-Allow-Origin':'http://localhost:3000',

    // }
})