import tenis1 from '../../assets/tenis1.webp';

export default function CardDiscover() {
  return (
    <div className="w-64">
      <img className="w-64" src={tenis1.src} alt="" />
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Product name</p>
        <p className="text-lg font-medium">R$ 3000</p>
      </div>
    </div>
  );
}
