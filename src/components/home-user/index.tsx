import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useUserProducts } from '../../hooks/useProductsUserId';
import CardDiscover from '../card-discover';

export default function HomeUser() {
  const auth = useContext(AuthContext);
  const userId = localStorage.getItem('userId');
  const { data: productsUser, isLoading: loading } = useUserProducts(userId);

  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="w-3/5 text-2xl font-bold ">My Account</div>
        <div className="flex gap-6">
          <span>My Products</span>
          <span onClick={auth?.logout}>logout</span>
        </div>
      </div>
      <div className="flex justify-evenly gap-x-7 gap-y-3 flex-wrap">
        {loading === true ? (
          <div>carregando</div>
        ) : (
          productsUser?.map((product, key) => (
            <CardDiscover
              key={key}
              productName={product.productName}
              productImage={product.productImage}
              productPrice={product.productPrice}
              productId={product._id}
            />
          ))
        )}
      </div>
    </>
  );
}
