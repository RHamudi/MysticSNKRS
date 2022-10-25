export default function Header() {
  return (
    <header>
      <nav className="flex justify-around py-6 bg-white shadow-black">
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
