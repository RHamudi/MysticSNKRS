import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://ecommerce-api-rest-back.herokuapp.com',
});

export const httpClient = <T>(config: AxiosRequestConfig) => {
  return axiosInstance(config) as AxiosPromise<T>;
};
