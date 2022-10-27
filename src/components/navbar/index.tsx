import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function NavbarPage() {
  const [hidden, setHidden] = useState(false);

  function handleHidden() {
    setHidden(!hidden);
  }

  return (
    <header>
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
              <a href="/">Home</a>
            </li>
            <li>Categorys</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={hidden ? 'md:block' : 'hidden md:block'}>
          <ul className="flex gap-2 flex-col md:flex md:flex-row md:gap-7">
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
