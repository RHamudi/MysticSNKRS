import type { NextPage } from 'next';

import Releases from '../components/discover-new-arrivals';
import Infos from '../components/infos';
import TrendingTops from '../components/trending-tops';

const Home: NextPage = () => {
  return (
    <>
      <Releases />
      <Infos />
      <TrendingTops />
    </>
  );
};

export default Home;
