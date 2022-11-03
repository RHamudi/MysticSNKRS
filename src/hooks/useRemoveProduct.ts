import { httpClient } from '../services/http-client';
import { CreateUser } from '../types/entities';

export async function removeProduct(
  userId: string | null,
  productId: string | undefined,
  token: string | null
) {
  const res = await httpClient<CreateUser>({
    url: `/delete/product/${userId}/${productId}`,
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}
