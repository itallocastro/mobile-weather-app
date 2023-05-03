import axios from 'axios';
import {API_URL} from './apiUrl';

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
const responseSuccess = (res: any) => res;

const responseError = async (error: any) => {
  if (error.message.match(/Network Error/)) {
    const msg = 'Falha na conexão com o servidor.';
    return Promise.reject(new Error(msg));
  }

  return Promise.reject(error);
};

client.interceptors.response.use(responseSuccess, responseError);

const request = (opts: any) => client.request(opts);

export {client, request};
