import ContentLoader from 'react-content-loader';

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
    return (
      <>
        <div className="flex justify-around flex-wrap gap-20">
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width="256"
            height="340"
          >
            <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
          </ContentLoader>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width="256"
            height="340"
          >
            <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
          </ContentLoader>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width="256"
            height="340"
          >
            <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
          </ContentLoader>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width="256"
            height="340"
          >
            <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
          </ContentLoader>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width="256"
            height="340"
          >
            <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
          </ContentLoader>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width="256"
            height="340"
          >
            <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
          </ContentLoader>
        </div>
      </>
    );
  }
}
