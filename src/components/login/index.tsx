/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import img from '../../assets/login.webp';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }

  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    NProgress.start();
    auth
      ?.signin(email, password)
      .then(() => {
        NProgress.done();
        router.push('/user');
      })
      .catch((err) => {
        NProgress.done();
        alert(err.response.data.erro);
      });
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
      />
      <form className="flex flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-9">Mystic SNKRS</h1>
        </div>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          E-mail
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Password
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
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
  );
}
