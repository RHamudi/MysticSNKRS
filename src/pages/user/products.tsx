import HomeUser from '../../components/home-user';
import { RequireAuth } from '../../redux/RequireAuth';

export default function Products() {
  return (
    <RequireAuth>
      <HomeUser />
    </RequireAuth>
  );
}
