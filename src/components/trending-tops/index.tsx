import CardDiscover from '../card-discover';

export default function TrendingTops() {
  return (
    <div>
      <h2 className="text-xl font-bold text-center my-10">Treding tops</h2>
      <div className="flex justify-around flex-wrap gap-14">
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
        <CardDiscover />
      </div>
      <div className="flex justify-center mt-24">
        <button className="bg-zinc-900 py-2 px-5 rounded text-white ">
          SHOP
        </button>
      </div>
    </div>
  );
}
