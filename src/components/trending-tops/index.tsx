import ContentLoader from 'react-content-loader';

import Link from 'next/link';

import { useProducts } from '../../hooks/useProducts';
import CardDiscover from '../card-discover';

export default function TrendingTops() {

  const { data: products, isLoading: loading } = useProducts();

  function filterProducts(numberFilter: number) {
    const filter = products?.slice(0, numberFilter);

    return filter?.sort((a, b) => b.productAccess - a.productAccess);
  }
  const filtered = filterProducts(4);

  if (!loading) {
    return (
      <div>
        <h2 className="text-xl font-bold text-center my-10">Treding tops</h2>
        <div className="flex justify-around flex-wrap gap-14">
          {filtered?.map((product, index) =>
              <CardDiscover
                buttonRemove={false}
                key={index}
                productId={product._id}
                productName={product.productName}
                productImage={product.productImage}
                productPrice={product.productPrice}
                imageHash={undefined}
                imageName={undefined}              />
            )}
        </div>
        <div className="flex justify-center mt-24">
          <button className="bg-zinc-900 py-2 px-5 rounded text-white mb-20 ">
            <Link href="/shop">SHOP</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-around flex-wrap gap-14 mb-14">
        <ContentLoader
          foregroundColor="rgb(229 231 235)"
          backgroundColor="rgb(209 213 219)"
          width={256}
          height={340}
        >
          <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
        </ContentLoader>
        <ContentLoader
          foregroundColor="rgb(229 231 235)"
          backgroundColor="rgb(209 213 219)"
          width={256}
          height={340}
        >
          <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
        </ContentLoader>
        <ContentLoader
          foregroundColor="rgb(229 231 235)"
          backgroundColor="rgb(209 213 219)"
          width={256}
          height={340}
        >
          <rect x="0" y="0" rx="5" ry="5" width="256" height="340" />
        </ContentLoader>
      </div>
    );
  }
}
