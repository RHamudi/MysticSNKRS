import HomeUser from '../../components/home-user';
import { RequireAuth } from '../../contexts/RequireAuth';

export default function Products() {
  return (
    <RequireAuth>
      <HomeUser />
    </RequireAuth>
  );
}
