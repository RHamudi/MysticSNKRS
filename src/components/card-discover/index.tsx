import { AiFillEdit } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

import Image from 'next/image';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import { removeProduct } from '../../hooks/useRemoveProduct';

export default function CardDiscover(props: {
  productName: string | undefined;
  productImage: string | undefined;
  productPrice: number | undefined;
  productId: string | undefined;
  buttonRemove: boolean | undefined;
  imageHash: string | undefined;
  imageName: string | undefined;
}) {
  const router = useRouter();
  const storageToken = localStorage.getItem('authToken');
  const storageUserId = localStorage.getItem('userId');

  function navigationProduct() {
    router.push(`/product/${props.productId}`);
  }

  function navigationEdit() {
    router.push(`/user/editproduct/${props.productId}`);
  }

  function handleRemove() {
    NProgress.start();
    removeProduct(storageUserId, props.productId, props.imageName, storageToken).then(() => {
      NProgress.done();
      router.reload();
    });
  }

  return (
    <>
      <div className="w-64 shadow-md hover:shadow-slate-400 rounded-xl p-5 cursor-pointer h-2/5">
        {props.buttonRemove && (
          <div className="flex justify-end gap-2">
            <button
              className="transition hover:scale-125 bg-gray-200 p-2 rounded"
              onClick={navigationEdit}
            >
              <AiFillEdit className="text-2xl" />
            </button>
            <button
              className="transition hover:scale-125 bg-gray-200 p-2 rounded"
              onClick={handleRemove}
            >
              <TiDelete className="text-2xl" />
            </button>
          </div>
        )}
        <div onClick={navigationProduct}>
          <Image
            src={props.productImage != undefined ? props.productImage : ''}
            className="-z-50"
            alt={props.productName}
            width={216}
            height={216}
            placeholder="blur"
            blurDataURL={props.productImage}
            sizes={'216'}
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium">{props.productName}</p>
            <p className="text-lg font-medium">R$ {props.productPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}
