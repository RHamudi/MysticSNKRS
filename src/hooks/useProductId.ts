import { httpClient } from '../services/http-client';
import { APIecommerceResponse, Products } from '../types/entities';
import { useRequest } from './use-request';

export async function getProduct(id: string | string[] | undefined) {
  const res = (
    await httpClient<APIecommerceResponse<Products>>({
      url: `/list/productid/${id}`,
    })
  ).data;
  return res;
}

export const useProduct = (id: string | string[] | undefined) => {
  return useRequest<Products>(['Product'], () => getProduct(id));
};
