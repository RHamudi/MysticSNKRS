import { httpClient } from '../services/http-client';
import {
  APIecommerceResponse,
  Products,
  UpdateProduct,
} from '../types/entities';

export async function updateProduct(
  productId: string | string[] | undefined,
  product: UpdateProduct
) {
  const storageUserId = localStorage.getItem('userId');
  const token = localStorage.getItem('authToken');
  const res = (
    await httpClient<APIecommerceResponse<Products[]>>({
      url: `/update/product/${storageUserId}/${productId}`,
      method: 'PATCH',
      data: product,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  ).data;

  return res;
}
