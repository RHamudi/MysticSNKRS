import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import img from '../../assets/login.webp';
import { createUser } from '../../hooks/useCreate';

export default function CreateUser() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleUsername(e: any) {
    setUsername(e.target.value);
  }

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }

  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    createUser(username, email, password)
      .then((res) => {
        alert(res.data.msg);
        router.push('/login');
      })
      .catch((err) => alert(err.response.data.erro));
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
        sizes={'655'}
      />
      <form className="flex flex-col">
        <div>
          <h1 className="text-3xl font-bold mb-9">Mystic SNKRS</h1>
        </div>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Username
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
          />
        </label>
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
          Register
        </button>
      </form>
    </div>
  );
}
