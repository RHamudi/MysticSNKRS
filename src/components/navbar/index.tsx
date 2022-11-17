import { useState, useContext } from 'react';
import { BsFillPeopleFill, BsFillCartFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthContext } from '../../contexts/AuthContext';

export default function NavbarPage() {
  const auth = useContext(AuthContext);
  const [hidden, setHidden] = useState(false);

  function handleHidden() {
    setHidden(!hidden);
  }

  const route = useRouter();

  const path = route.pathname;

  return (
    <header className="mb-20 z-50">
      <nav className="z-50 flex flex-col md:flex-row fixed top-0 left-0 right-0 justify-around py-6 bg-white shadow-2xl shadow-slate-300">
        <div className="flex z-50 justify-between">
          <ul className="flex z-50">
            <li className="font-black text-2xl">
              <h1>Mystic SNKRS</h1>
            </li>
          </ul>
          <button onClick={handleHidden} className="md:hidden text-4xl">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={hidden ? 'md:block' : 'hidden md:block'}>
          <ul className="flex z-50 gap-2 flex-col md:flex md:flex-row md:gap-7">
            <li
              className={path === '/' ? 'border-b-2 border-black' : undefined}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                path === '/shop' ? 'border-b-2 border-black' : undefined
              }
            >
              <Link className="text-lg" href="/shop">
                Shop
              </Link>
            </li>
            <li
              className={
                path === '/about' ? 'border-b-2 border-black' : undefined
              }
            >
              <Link href="/about">About</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={hidden ? 'md:block' : 'hidden md:block'}>
          <ul className="flex gap-2 flex-col md:flex md:flex-row md:gap-7">
            <li
              className={
                path === '/login' || path === '/create'
                  ? 'border-b-2 border-black justify-center items-center'
                  : 'justify-center items-center text-xl'
              }
            >
              {auth?.authenticate == true ? (
                <Link href="/user/products">
                  <span className="flex justify-center items-center cursor-pointer gap-1">
                    <span className="text-lg">{auth.username}</span>{' '}
                    <BsFillPeopleFill />
                  </span>
                </Link>
              ) : (
                <Link href="/login">
                  <span className="flex justify-center items-center cursor-pointer gap-1">
                    <span className="text-lg">Login / Create</span>{' '}
                    <BsFillPeopleFill />
                  </span>
                </Link>
              )}
            </li>
            {auth?.authenticate && (
              <li className="flex justify-center items-center text-xl">
                <BsFillCartFill />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
