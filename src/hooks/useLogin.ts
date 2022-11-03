import { httpClient } from '../services/http-client';
import { Login } from '../types/entities';

export const useLogin = () => ({
  login: async (email: string, password: string) => {
    const res = await httpClient<Login>({
      url: '/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    return res.data;
  },
  verifyToken: async (token: string) => {
    const res = await httpClient({
      url: '/verify/user',
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res;
  },
});
