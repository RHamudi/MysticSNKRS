import HomeUser from '../components/home-user';
import { RequireAuth } from '../contexts/RequireAuth';

export default function User() {
  return (
    <RequireAuth>
      <HomeUser />
    </RequireAuth>
  );
}
