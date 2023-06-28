import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Alert } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import img from '../../assets/login.webp';
import { signin, setApiErro, useStateLogin } from '../../redux/loginSlice';
import { useLogin } from '../../hooks/useLogin';
import { submitLogin } from '../../types/entities';

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {apiErro} = useSelector(useStateLogin);
  const logar = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 async function onSubmit(data: submitLogin | any) {
    NProgress.start();
    await logar.login(data.email, data.password).then((res) => {
      NProgress.done();
      dispatch(signin(res));
      router.push('/user/products');
    }).catch((err)=>{
      NProgress.done();
      dispatch(setApiErro(err.response.data.erro));
      setTimeout(() => {
        dispatch(setApiErro(''));
      }, 8000);
    });
 }

  return (
    <>
      {apiErro && (
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
            Não possui uma conta? Registre em nosso Site.{' '}
            <Link href="/create">Click here.</Link>
          </p>
        </form>
      </div>
    </>
  );
}
