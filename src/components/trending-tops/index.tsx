import PlaceholderLoading from 'react-placeholder-loading';

import Link from 'next/link';

import { useProducts } from '../../hooks/useProducts';
import CardDiscover from '../card-discover';

export default function TrendingTops() {
  const tops = [
    'Black Flax',
    'Air Jordan 2',
    'Hot Step Air Terra Humara ’99 OG',
  ];

  const { data: Products, isLoading: Loading } = useProducts();

  const filtered = tops.map((tops) =>
    Products?.filter((item) => item.productName.includes(tops))
  );

  if (!Loading) {
    return (
      <div>
        <h2 className="text-xl font-bold text-center my-10">Treding tops</h2>
        <div className="flex justify-around flex-wrap gap-14">
          {filtered.map((array) =>
            array?.map((filter, index) => (
              <CardDiscover
                key={index}
                productId={filter._id}
                productName={filter.productName}
                productImage={filter.productImage}
                productPrice={filter.productPrice}
              />
            ))
          )}
        </div>
        <div className="flex justify-center mt-24">
          <button className="bg-zinc-900 py-2 px-5 rounded text-white ">
            <Link href="/shop">SHOP</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-around flex-wrap gap-24 my-10">
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
