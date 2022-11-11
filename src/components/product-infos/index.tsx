import ContentLoader from 'react-content-loader';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useProduct } from '../../hooks/useProductId';

export default function ProductInfo() {
  const { id } = useRouter().query;

  function verify(id: string | string[] | undefined) {
    if (id != undefined) return id;
  }

  const { data: product, isLoading: loading } = useProduct(verify(id));

  if (loading) {
    return (
      <div className="flex justify-around">
        <div>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            width={600}
            height={600}
          >
            <rect x="0" y="0" rx="5" ry="5" width="600" height="600" />
          </ContentLoader>
        </div>
        <div>
          <ContentLoader
            foregroundColor="rgb(229 231 235)"
            backgroundColor="rgb(209 213 219)"
            height={600}
          >
            <rect x="110" y="69" rx="3" ry="3" width="100" height="35" />
            <rect x="0" y="138" rx="3" ry="3" width="320" height="35" />
            <rect x="0" y="207" rx="3" ry="3" width="320" height="35" />
            <rect x="0" y="276" rx="3" ry="3" width="320" height="35" />
            <rect x="0" y="345" rx="3" ry="3" width="320" height="35" />
            <rect x="0" y="414" rx="3" ry="3" width="320" height="35" />
          </ContentLoader>
        </div>
      </div>
    );
  }
  if (!loading) {
    return (
      <div className="md:flex md:justify-center">
        <Image
          className="-z-50"
          src={product?.productImage != undefined ? product.productImage : ''}
          alt={product?.productName}
          width={700}
          height={700}
          placeholder="empty"
        />
        <div className="flex flex-col justify-start gap-5 w-1/2">
          <h1 className="mt-16 text-2xl font-bold text-center">
            {product?.productName}
          </h1>
          <p className="indent-2 text-sm">{product?.productDescription}</p>
          <h3 className="text-2xl font-bold">
            Price: R${product?.productPrice}
          </h3>
          <p>Amount: {product?.productQuantity}</p>
          <button
            className="bg-neutral-900 text-white p-3 w-44 m-auto rounded"
            type="button"
          >
            PURCHASE
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
