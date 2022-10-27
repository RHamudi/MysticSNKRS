import { httpClient } from '../services/http-client';
import { APIecommerceResponse, Products } from '../types/entities';
import { useRequest } from './use-request';

export async function getProducts() {
  const res = (
    await httpClient<APIecommerceResponse<Products[]>>({
      url: '/list/products',
    })
  ).data;

  return res;
}

export const useProducts = () => {
  return useRequest<Products[]>(['Products'], getProducts);
};
