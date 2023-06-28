import { useSelector } from 'react-redux';

import Login from '../pages/login';
import { useStateLogin } from './loginSlice';

export function RequireAuth(props: { children: JSX.Element }) {
  const {authenticateIs} = useSelector(useStateLogin);

  if (!authenticateIs) {
    return <Login />;
  }
  return props.children;
}
