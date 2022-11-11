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
    return <div>carregando</div>;
  }
  if (!loading) {
    return (
      <div className="md:flex md:justify-center">
        <Image
          className="-z-50"
          src={product?.productImage != undefined ? product.productImage : ''}
          alt={product?.productName}
          width={3000}
          height={3000}
          placeholder="empty"
        />
        <div className="flex flex-col justify-start gap-5">
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
