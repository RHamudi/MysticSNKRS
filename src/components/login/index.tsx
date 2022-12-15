/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Alert } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import img from '../../assets/login.webp';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const [apiErro, setApiErro] = useState<string>('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data: any) {
    NProgress.start();
    auth
      ?.signin(data.email, data.password)
      .then(() => {
        NProgress.done();
        router.push('/user/products');
      })
      .catch((err) => {
        NProgress.done();
        setApiErro(err.response.data.erro);
        setTimeout(() => {
          setApiErro('');
        }, 8000);
      });
  }

  return (
    <>
      {apiErro != '' && (
        <Alert
          className="w-80 absolute right-0 mt-7 mr-7"
          variant="outlined"
          severity="error"
        >
          <span>{apiErro}</span>
        </Alert>
      )}
      <div className="h-screen flex justify-center items-center md:h-auto md:w-auto md:flex md:items-center md:gap-32">
        <div className="hidden md:block">
          <Image
            className="w-2/4 -z-50"
            src={img.src}
            alt="img"
            width={655}
            height={655}
            blurDataURL={img.blurDataURL}
          />
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-3xl font-bold mb-9">Mystic SNKRS</h1>
          </div>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            E-mail
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('email', { required: true })}
            />
            {errors.email && <span>O email é obrigatorio</span>}
          </label>
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Password
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && <span>A senha é obrigatoria</span>}
          </label>
          <button
            type="submit"
            className="w-36 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <p>
            Doesn't have an account? Register on the website.{' '}
            <Link href="/create">Click here.</Link>
          </p>
        </form>
      </div>
    </>
  );
}
