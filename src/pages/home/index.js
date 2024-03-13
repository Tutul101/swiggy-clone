import React, { useEffect, useState } from "react";
import _get from "lodash/get";

import { getHomePageData } from "../../helper/api";
import HeroCarousel1 from "../../layouts/hero-carousel1";
import HeroCarousel2 from "../../layouts/hero-caaousel2";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      try {
        const homepageData = await getHomePageData();
        setHomeData(_get(homepageData, ["data", "cards"], []));
      } catch (err) {
        setError(true);
      }
    };
    loadData();
  }, []);

  if (homeData.length === 0) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    <h1>Some thing went wrong</h1>;
  }
  return (
    <div>
      <HeroCarousel1 cards={homeData[0] && homeData[0].card.card} />

      <HeroCarousel2 cards={homeData[1] && homeData[1].card.card} />
      {/* <h1>Home</h1> */}
    </div>
  );
};

export default Home;
