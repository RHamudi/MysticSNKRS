import ContentLoader from 'react-content-loader';

import Image from 'next/image';

import imgMain from '../../assets/main.webp';
import { useProducts } from '../../hooks/useProducts';
import CardDiscover from '../card-discover';

export default function Releases() {
  const { data: products, isLoading: loading } = useProducts();

  const filtered = products?.map((item, index) => {
    if (index < 6) {
      return item;
    }
  });

  if (!loading) {
    return (
      <main>
        <div className="mt-6 -z-50 relative">
          <Image
            className="static -z-50"
            src={imgMain.src}
            alt="Imagem principal"
            width={1315}
            height={512}
            blurDataURL={imgMain.blurDataURL}
            placeholder="blur"
            priority={true}
            sizes={'510'}
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-8">
          <h2 className="text-xl font-bold">Discover new arrivals</h2>
          <p className="font-medium">Releases</p>
        </div>
        <div className="flex justify-around flex-wrap gap-24">
          {filtered?.map((product, index) => (
            <CardDiscover
              buttonRemove={false}
              key={index}
              productId={product?._id}
              productName={product?.productName}
              productImage={product?.productImage}
              productPrice={product?.productPrice}
            />
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <>
        <div>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width={1310}
            height={412}
          >
            <rect x="0" y="0" rx="5" ry="5" width="1310" height="412" />
          </ContentLoader>
        </div>
        <div className="flex justify-around flex-wrap gap-24 mt-14">
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
      </>
    );
  }
}
