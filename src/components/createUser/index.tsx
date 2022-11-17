import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';
import { useRouter } from 'next/router';

import img from '../../assets/login.webp';
import { createUser } from '../../hooks/useCreate';

export default function CreateUser() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="flex items-center gap-32">
      <Image
        className="w-2/4 -z-50"
        src={img.src}
        alt="img"
        width={655}
        height={655}
        blurDataURL={img.blurDataURL}
        placeholder="blur"
      />
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className="text-3xl font-bold mb-9">Mystic SNKRS</h1>
        </div>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Username
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('username', { required: true })}
          />
          {errors.username && <span>Username is required</span>}
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          E-mail
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('email', { required: true })}
          />
          {errors.email && <span>E-mail is required</span>}
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Password
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register('password', { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </label>
        <button
          type="submit"
          className="w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
}
