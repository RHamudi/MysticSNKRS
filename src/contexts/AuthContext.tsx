import { createContext } from 'react';

interface Context {
  username: string | undefined;
  signin: (email: string, password: string) => Promise<void>;
  authenticate: boolean | undefined;
}

export const AuthContext = createContext<Context | null>(null);
