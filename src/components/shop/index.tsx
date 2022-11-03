import PlaceholderLoading from 'react-placeholder-loading';

import { useProducts } from '../../hooks/useProducts';
import CardDiscover from '../card-discover';

export default function ShopPage() {
  const { data: products, isLoading: loading } = useProducts();

  if (!loading) {
    return (
      <div className="flex justify-around flex-wrap gap-12">
        {products?.map((product, index) => (
          <CardDiscover
            buttonRemove={false}
            key={index}
            productId={product._id}
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
          />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}
