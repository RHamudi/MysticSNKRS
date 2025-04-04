import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdManageAccounts } from 'react-icons/md';
import { SlLogout } from 'react-icons/sl';
import { useDispatch } from 'react-redux';

import Link from 'next/link';


import { logout } from '../../redux/loginSlice';

export default function NavUser() {
  const dispatch = useDispatch();

  function logOut(){
    dispatch(logout());
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="w-3/5 text-5xl font-bold ">My Products</div>
      <div className="flex justify-center items-center gap-6">
        <Link href="/user/products">
          <span className="bg-gray-200 cursor-pointer p-4 rounded-md">
            <MdManageAccounts className="text-2xl" />
          </span>
        </Link>

        <Link href="/newproduct">
          <span className="bg-gray-200 cursor-pointer p-4 rounded-md">
            <AiOutlineAppstoreAdd className="text-2xl" />
          </span>
        </Link>

        <span
          className="bg-gray-200 cursor-pointer p-4 rounded-md"
          onClick={logOut}
        >
          <SlLogout className="text-2xl" />
        </span>
      </div>
    </div>
  );
}
