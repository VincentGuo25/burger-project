import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ce22a.firebaseio.com/'
});

export default instance;