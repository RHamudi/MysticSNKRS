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
    <header className="mb-20">
      <nav className="flex flex-col md:flex-row fixed top-0 left-0 right-0 justify-around py-6 bg-white shadow-2xl shadow-slate-300">
        <div className="flex justify-between">
          <ul className="flex">
            <li className="font-black text-2xl">
              <h1>Mystic SNKRS</h1>
            </li>
          </ul>
          <button onClick={handleHidden} className="md:hidden text-4xl">
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={hidden ? 'md:block' : 'hidden md:block'}>
          <ul className="flex gap-2 flex-col md:flex md:flex-row md:gap-7">
            <li>
              <Link
                href="/"
                className={path === '/' ? 'border-b-2 border-black' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={
                  path === '/shop' ? 'border-b-2 border-black' : undefined
                }
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  path === '/about' ? 'border-b-2 border-black' : undefined
                }
              >
                About
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={hidden ? 'md:block' : 'hidden md:block'}>
          <ul className="flex gap-2 flex-col md:flex md:flex-row md:gap-7">
            <li
              className={
                path === '/login'
                  ? 'border-b-2 border-black justify-center items-center text-xl'
                  : 'justify-center items-center text-xl'
              }
            >
              <Link href="/login">
                <span>
                  <BsFillPeopleFill />
                </span>
              </Link>
            </li>
            {auth?.authenticate && (
              <li className="justify-center items-center text-xl">
                <BsFillCartFill />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
