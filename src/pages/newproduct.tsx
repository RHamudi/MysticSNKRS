import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import { createProduct } from '../hooks/useCreateProduct';

export default function NewProduct() {
  const router = useRouter();
  const [image, setImage] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleImage(e: any) {
    const image = URL.createObjectURL(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setImage(image);
    } else {
      setImage("null");
    }
  }

  function onSubmit(data: any) {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("productName", data.productName);
    formData.append("productDescription", data.productDescription);
    formData.append("productPrice", data.productPrice);
    formData.append("productQuantity", data.productQuantity);

    NProgress.start();
    createProduct(formData)
      .then(() => {
        NProgress.done();
        router.push('/user/products');
      })
      .catch(() => {
        NProgress.done();
      });
  }

  return (
    <div className="flex justify-around">
      <div>
        <h1 className="mt-16 text-2xl font-bold text-center">Image preview</h1>
        <Image src={image} width={600} height={600} />
      </div>
      <form
        className="flex flex-col gap-4 mt-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className=" text-2xl font-bold text-center">Create Product</h1>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Name
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('productName', { required: true })}
          />
          {errors.productName && <span>Name is required</span>}
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Description
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('productDescription', { required: true })}
          />
          {errors.productDescription && <span>Description is required</span>}
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Price
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('productPrice', { required: true })}
          />
          {errors.productPrice && <span>Price is required</span>}
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Product Quantity
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            {...register('productQuantity', { required: true })}
          />
          {errors.productQuantity && <span>Quantity is required</span>}
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Image
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            {...register('file', { required: true })}
            onChange={handleImage}
          />
          {errors.productImage && <span>Image is required</span>}
        </label>

        <button
          className="bg-neutral-900 text-white p-3 w-44 mx-auto rounded"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}
