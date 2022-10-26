import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import payments from '../../assets/payments.webp';

export default function Footer() {
  return (
    <footer className="bg-gray-400 flex justify-around items-center py-10 mt-16">
      <div>
        <h3 className="font-bold flex justify-center">COMPANY INFO</h3>
        <ul>
          <li>About us</li>
          <li>Latest post</li>
          <li>Contact Us</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold flex justify-center">SOCIAL NETWORK</h3>
        <ul className="flex justify-around">
          <li className="text-3xl">
            <BsTwitter />
          </li>
          <li className="text-3xl">
            <AiFillInstagram />
          </li>
          <li className="text-3xl">
            <IoLogoWhatsapp />
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold flex justify-center">PAYMENTS</h3>
        <ul>
          <li>
            <img className="w-64" src={payments.src} alt="payments" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
