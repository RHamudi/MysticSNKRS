import { useRouter } from 'next/router';

import { useProduct } from '../../hooks/useProductId';

export default function ProductInfo() {
  const { id } = useRouter().query;

  function verify(id: string | string[] | undefined) {
    if (id != undefined) return id;
  }

  const { data: product, isLoading: loading } = useProduct(verify(id));
  console.log(product?.productName);

  if (loading) {
    return <div>carregando</div>;
  }
  if (!loading) {
    return (
      <div className="md:flex md:justify-center md:gap-36">
        <img
          className="md:w-96 lg:w-3/6"
          src={product?.productImage}
          alt={product?.productName}
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
