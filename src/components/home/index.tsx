import Releases from '../discover-new-arrivals';
import Infos from '../infos';
import TrendingTops from '../trending-tops';

export default function HomePage() {
  return (
    <>
      <Releases />
      <Infos />
      <TrendingTops />
    </>
  );
}
