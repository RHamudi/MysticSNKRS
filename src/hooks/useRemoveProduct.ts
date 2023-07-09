import { httpClient } from '../services/http-client';
import { CreateUser } from '../types/entities';

export async function removeProduct(
  userId: string | null,
  productId: string | undefined,
  imageName: string | undefined,
  token: string | null
) {
  const res = await httpClient<CreateUser>({
    url: `/delete/product/${userId}/${productId}/${imageName}`,
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res;
}
