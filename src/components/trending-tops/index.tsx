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

  if (!Loading)
    return (
      <div>
        <h2 className="text-xl font-bold text-center my-10">Treding tops</h2>
        <div className="flex justify-around flex-wrap gap-14">
          {filtered.map((array) =>
            array?.map((filter, index) => (
              <CardDiscover
                key={index}
                productName={filter.productName}
                productImage={filter.productImage}
                productPrice={filter.productPrice}
              />
            ))
          )}
        </div>
        <div className="flex justify-center mt-24">
          <button className="bg-zinc-900 py-2 px-5 rounded text-white ">
            SHOP
          </button>
        </div>
      </div>
    );
}
