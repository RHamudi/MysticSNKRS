import ContentLoader from 'react-content-loader';

import { useUserProducts } from '../../hooks/useProductsUserId';
import CardDiscover from '../card-discover';
import NavUser from '../nav-user';

export default function HomeUser() {
  const userId = localStorage.getItem('userId');
  const { data: productsUser, isLoading: loading } = useUserProducts(userId);

  return (
    <>
      <NavUser />

      <div className="flex justify-evenly gap-x-7 gap-y-3 flex-wrap my-9">

        {loading === true ? (
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
        ) : (
          productsUser?.map((product, key) => (
            <CardDiscover
              buttonRemove={true}
              key={key}
              productName={product.productName}
              productImage={product.productImage}
              productPrice={product.productPrice}
              productId={product._id}
              imageHash={product.imageHash}
              imageName={product.imageName}
            />
          ))
        )}
      </div>
    </>
  );
}
