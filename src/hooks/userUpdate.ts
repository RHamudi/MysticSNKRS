import { httpClient } from '../services/http-client';
import {
  APIecommerceResponse,
  Products,
  UpdateProduct,
} from '../types/entities';

export async function updateProduct(
  userId: string | null,
  productId: string | string[] | undefined,
  product: UpdateProduct
) {
  console.log(product);
  const token = localStorage.getItem('authToken');
  const res = (
    await httpClient<APIecommerceResponse<Products[]>>({
      url: `/update/product/${userId}/${productId}`,
      method: 'PATCH',
      data: product,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
  ).data;

  return res;
}
