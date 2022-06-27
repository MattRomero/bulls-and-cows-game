import axios from "axios";

const BASE_URL = 'https://localhost:6667';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

httpClient.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;

    if (!response) {
      return Promise.reject({
        ...error,
        id: 'NETWORK_ERROR',
      });
    }
    
    return Promise.reject(response)
  },
);

export { httpClient };
