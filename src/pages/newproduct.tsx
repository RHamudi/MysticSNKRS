import { useState } from 'react';

import Image from 'next/image';

export default function NewProduct() {
  const [image, setImage] = useState<string>('');

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }

  return (
    <div className="flex justify-around">
      <div>
        <h1 className="mt-16 text-2xl font-bold text-center">Image preview</h1>
        <Image src={image} width={600} height={600} blurDataURL={image} />
      </div>
      <div className="flex flex-col gap-4 mt-16">
        <h1 className=" text-2xl font-bold text-center">Update Product</h1>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Name
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Description
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Price
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Quantity
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
          />
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Image Link
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={image}
            onChange={handleImage}
          />
        </label>

        <button className="bg-neutral-900 text-white p-3 w-44 mx-auto rounded">
          Update
        </button>
      </div>
    </div>
  );
}
