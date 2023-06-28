import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
});

export const httpClient = <T>(config: AxiosRequestConfig) => {
  return axiosInstance(config) as AxiosPromise<T>;
};
