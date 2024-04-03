import React, { useEffect, useState } from "react";
import _get from "lodash/get";

import { getHomePageData } from "../../helper/api";
import HeroCarousel1 from "../../layouts/hero-carousel1";
import HeroCarousel2 from "../../layouts/hero-caaousel2";
import RestrauntList from "../../components/restraunt-list";
import useOnlineStatus from "../../utils/useOnlinestatus";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const [error, setError] = useState(false);

  const onlineStatus = useOnlineStatus();
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

  if (!onlineStatus) {
    return <h1>Looks like you are offline please try again</h1>;
  }
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

      <RestrauntList restrauntList={homeData.slice(2, 5)} />
      {/* <h1>Home</h1> */}
    </div>
  );
};

export default Home;
