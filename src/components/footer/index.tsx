import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

import Image from 'next/image';

import payments from '../../assets/payments.webp';

export default function Footer() {
  return (
    <footer className="bg-gray-400 flex justify-around items-center py-10">
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
            <Image
              className="w-64"
              src={payments.src}
              alt="payments"
              width={255}
              height={85}
              blurDataURL={payments.blurDataURL}
              sizes={'256'}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
