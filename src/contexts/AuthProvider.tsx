import { useEffect, useState } from 'react';

import { useLogin } from '../hooks/useLogin';
import { Login } from '../types/entities';
import { AuthContext } from './AuthContext';

export function AuthProvider(props: { children: JSX.Element }) {
  const logar = useLogin();
  const [username, setUsername] = useState<Login['username']>();
  const [authenticate, setAuthenticate] = useState<boolean>(false);

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

  function logout() {
    setAuthenticate(false);
    setUsername(undefined);
    localStorage.clear();
  }

  async function signin(email: string, password: string) {
    await logar.login(email, password).then((res) => {
      setUsername(res.username);
      setToken(res.token);
      setUserId(res.id);
    });
  }

  function setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  function setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  return (
    <AuthContext.Provider value={{ signin, username, authenticate, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
