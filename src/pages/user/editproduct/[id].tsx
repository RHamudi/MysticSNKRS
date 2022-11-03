import { useRouter } from 'next/router';

import { useProduct } from '../../../hooks/useProductId';

export default function EditProduct() {
  const { id } = useRouter().query;

  function verify(id: string | string[] | undefined) {
    if (id != undefined) return id;
  }

  const { data: product, isLoading: loading } = useProduct(verify(id));

  return (
    <div className="flex justify-around">
      <div>
        <h1>{product?.productName}</h1>
        <img src={product?.productImage} />
      </div>
      <div className="flex flex-col gap-4">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
}
