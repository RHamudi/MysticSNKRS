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
    return (
      <div className="flex justify-around flex-wrap gap-12">
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
        <div>
          <PlaceholderLoading
            shape="rect"
            width={256}
            height={340}
            colorStart={'rgb(229 231 235)'}
            colorEnd={'rgb(209 213 219)'}
          />
        </div>
      </div>
    );
  }
}
