import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

const url =  "https://apiecommercerhamudi.onrender.com";

const axiosInstance = axios.create({
  baseURL: url,
});

export const httpClient = <T>(config: AxiosRequestConfig) => {
  return axiosInstance(config) as AxiosPromise<T>;
};
