import { useState } from 'react';
import ContentLoader from 'react-content-loader';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useProduct } from '../../../hooks/useProductId';
import { updateProduct } from '../../../hooks/userUpdate';
import { Products, UpdateProduct } from '../../../types/entities';

export default function EditProduct() {
  const [name, setName] = useState<Products['productName']>();
  const [description, setDescription] =
    useState<Products['productDescription']>();
  const [price, setPrice] = useState<Products['productPrice']>();
  const [quantity, setQuantity] = useState<Products['productQuantity']>();
  const [image, setImage] = useState<Products['productImage']>();
  const { id } = useRouter().query;
  const { data: product } = useProduct(verify(id));

  const data: UpdateProduct = {
    productName: name != undefined ? name : product?.productName,
    productDescription:
      description != undefined ? description : product?.productDescription,
    productPrice: price != undefined ? price : product?.productPrice,
    productQuantity:
      quantity != undefined ? quantity : product?.productQuantity,
    productImage: image != undefined ? image : product?.productImage,
  };

  function handleName(e: any) {
    setName(e.target.value);
  }
  function handleDescription(e: any) {
    setDescription(e.target.value);
  }
  function handlePrice(e: any) {
    setPrice(e.target.value);
  }
  function handleQuantity(e: any) {
    setQuantity(e.target.value);
  }
  function handleImage(e: any) {
    setImage(e.target.value);
  }

  const update = () => {
    updateProduct(id, data);
  };

  function verify(id: string | string[] | undefined) {
    if (id != undefined) return id;
  }
  const loading = false;

  if (loading)
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

  if (!loading)
    return (
      <div className="flex justify-around">
        <div>
          <h1 className="mt-16 text-2xl font-bold text-center">
            {product?.productName}
          </h1>
          <Image
            src={product?.productImage != undefined ? product.productImage : ''}
            alt={product?.productName}
            width={600}
            height={600}
            priority
          />
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <h1 className=" text-2xl font-bold text-center">Update Product</h1>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Product Name
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={product?.productName}
              value={name}
              onChange={handleName}
            />
          </label>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Product Description
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={product?.productDescription}
              value={description}
              onChange={handleDescription}
            />
          </label>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Product Price
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={product?.productPrice.toString()}
              value={price}
              onChange={handlePrice}
            />
          </label>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Product Quantity
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={product?.productQuantity.toString()}
              value={quantity}
              onChange={handleQuantity}
            />
          </label>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Image Link
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder={product?.productImage}
              value={image}
              onChange={handleImage}
            />
          </label>

          <button
            onClick={update}
            className="bg-neutral-900 text-white p-3 w-44 mx-auto rounded"
          >
            Update
          </button>
        </div>
      </div>
    );
}
