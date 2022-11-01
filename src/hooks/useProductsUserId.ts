import { httpClient } from '../services/http-client';
import { APIecommerceResponse, ProductsUser } from '../types/entities';
import { useRequest } from './use-request';

export async function getUserProducts(userId: string | null) {
  const res = (
    await httpClient<APIecommerceResponse<ProductsUser>>({
      url: `list/productsuser/${userId}`,
    })
  ).data;
  return res;
}

export const useUserProducts = (userId: string | null) => {
  return useRequest<Array<ProductsUser>>(['ProductsUser'], () =>
    getUserProducts(userId)
  );
};
