import { useContext } from 'react';

import Login from '../pages/login';
import { AuthContext } from './AuthContext';

export function RequireAuth(props: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  if (!auth?.authenticate) {
    return <Login />;
  }
  return props.children;
}
