import { httpClient } from '../services/http-client';
import { CreateUser } from '../types/entities';

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const res = await httpClient<CreateUser>({
    url: '/create/user',
    method: 'POST',
    data: {
      username,
      email,
      password,
    },
  });
  return res;
}
