import PlaceholderLoading from 'react-placeholder-loading';

import Image from 'next/image';

import imgMain from '../../assets/main.webp';
import { useProducts } from '../../hooks/useProducts';
import CardDiscover from '../card-discover';

export default function Releases() {
  const { data: Products, isLoading: Loading } = useProducts();

  if (!Loading) {
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
          {Products?.map((product, index) => (
            <CardDiscover
              key={index}
              productId={product._id}
              productName={product.productName}
              productImage={product.productImage}
              productPrice={product.productPrice}
            />
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <>
        <div>
          <div>
            <PlaceholderLoading
              shape="rect"
              width={1310}
              height={511}
              colorStart={'rgb(229 231 235)'}
              colorEnd={'rgb(209 213 219)'}
            />
          </div>
        </div>
        <div className="flex justify-around flex-wrap gap-24 pt-9">
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
      </>
    );
  }
}
