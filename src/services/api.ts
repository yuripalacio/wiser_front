import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6027fd22dd4afd001754ade4.mockapi.io/wiser',
});

export default api;
