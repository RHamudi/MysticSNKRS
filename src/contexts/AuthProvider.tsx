import { useEffect, useState } from 'react';

import { useLogin } from '../hooks/useLogin';
import { Login } from '../types/entities';
import { AuthContext } from './AuthContext';

export function AuthProvider(props: { children: JSX.Element }) {
  const logar = useLogin();
  const [username, setUsername] = useState<Login['username']>();
  const [authenticate, setAuthenticate] = useState<boolean>();

  useEffect(() => {
    async function validate() {
      const storageToken = localStorage.getItem('authToken');
      if (storageToken) {
        await logar
          .verifyToken(storageToken)
          .then((res) => {
            if (res.status === 200) {
              setAuthenticate(true);
            }
          })
          .catch(() => {
            setAuthenticate(false);
            localStorage.clear();
          });
      }
    }
    validate();
  });

  async function signin(email: string, password: string) {
    await logar
      .login(email, password)
      .then((res) => {
        setUsername(res.username);
        setToken(res.token);
      })
      .catch((err) => console.log(err));
  }

  function setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  return (
    <AuthContext.Provider value={{ signin, username, authenticate }}>
      {props.children}
    </AuthContext.Provider>
  );
}
