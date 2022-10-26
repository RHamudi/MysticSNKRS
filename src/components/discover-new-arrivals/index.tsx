import imgMain from '../../assets/main.png';
import CardDiscover from '../card-discover';

export default function Releases() {
  return (
    <main>
      <img className="mt-6" src={imgMain.src} alt="test" />
      <div className="flex flex-col justify-center items-center mt-8">
        <h2 className="text-xl font-bold">Discover new arrivals</h2>
        <p className="font-medium">Releases</p>
      </div>
      <div className="flex justify-around flex-wrap gap-24">
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
      </div>
    </main>
  );
}
