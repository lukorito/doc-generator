import axios from 'axios';

const getStoredAuthToken = () => localStorage.getItem('authToken');

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
  },
});

export default instance;
