import { httpClient } from '../services/http-client';
import { CreateUser } from '../types/entities';

export async function createProduct(data: any) {
  const storageId = localStorage.getItem('userId');
  const storageToken = localStorage.getItem('authToken');
  const res = await httpClient<CreateUser>({
    url: `/create/product/${storageId}`,
    method: 'POST',
    headers: {
      authorization: `Bearer ${storageToken}`,
    },
    data: data,
  });
  return res;
}
