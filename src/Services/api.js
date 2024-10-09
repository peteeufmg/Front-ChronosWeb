import axios from 'axios';

const api = axios.create({ baseURL: "https://back-chronosweb.onrender.com:8000"});

export default api; 