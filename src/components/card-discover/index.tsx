import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CardDiscover(props: {
  productName: string;
  productImage: string;
  productPrice: number;
  productId: string;
}) {
  const router = useRouter();
  function navigation() {
    router.push(`/product/${props.productId}`);
  }
  return (
    <div
      className="w-64 shadow-md hover:shadow-slate-400 rounded-xl p-5 cursor-pointer"
      onClick={navigation}
    >
      <Image
        src={props.productImage}
        className="-z-50"
        alt={props.productName}
        width={216}
        height={216}
        blurDataURL={props.productImage}
        sizes={'216'}
      />
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">{props.productName}</p>
        <p className="text-lg font-medium">R$ {props.productPrice}</p>
      </div>
    </div>
  );
}
