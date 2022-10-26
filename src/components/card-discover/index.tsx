export default function CardDiscover(props: {
  productName: string;
  productImage: string;
  productPrice: number;
}) {
  return (
    <div className="w-64">
      <img className="w-64" src={props.productImage} alt="" />
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">{props.productName}</p>
        <p className="text-lg font-medium">R$ {props.productPrice}</p>
      </div>
    </div>
  );
}
