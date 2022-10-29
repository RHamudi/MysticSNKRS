import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export default function LoginPage() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e: any) {
    setEmail(e.target.value);
  }

  function handlePassword(e: any) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    auth?.signin(email, password);
  }

  return (
    <div className="flex flex-col items-center h-screen gap-24 mt-52">
      <div>
        <h1>Mystic SNKRS</h1>
      </div>
      <form className="flex flex-col">
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          E-mail
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </label>
        <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
          Password
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="email"
            value={password}
            onChange={handlePassword}
          />
        </label>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  );
}
