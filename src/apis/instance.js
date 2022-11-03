import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api/cars',
});

export default instance;
