import { useUserProducts } from '../../hooks/useProductsUserId';
import CardDiscover from '../card-discover';
import NavUser from '../nav-user';

export default function HomeUser() {
  const userId = localStorage.getItem('userId');
  const { data: productsUser, isLoading: loading } = useUserProducts(userId);

  return (
    <>
      <NavUser />
      <div className="flex justify-evenly gap-x-7 gap-y-3 flex-wrap mt-8">
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
