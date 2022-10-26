export default function Header() {
  return (
    <header>
      <nav className="flex fixed top-0 left-0 right-0 justify-around py-6 bg-white shadow-2xl shadow-slate-300">
        <ul className="flex">
          <li className="font-black text-2xl">
            <h1>Mystic SNKRS</h1>
          </li>
        </ul>
        <ul className="flex gap-7">
          <li>Home</li>
          <li>Categorys</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-7">
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
}
