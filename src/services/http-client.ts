import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

const url =  "https://apiecommercerhamudi.onrender.com";
const dev = "http://localhost:4000/";
const axiosInstance = axios.create({
  baseURL: dev,
});

export const httpClient = <T>(config: AxiosRequestConfig) => {
  return axiosInstance(config) as AxiosPromise<T>;
};
