import React, { useEffect, useState } from "react";
import _get from "lodash/get";

import { getHomePageData } from "../../helper/api";

const Home = () => {
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const homepageData = await getHomePageData();
      console.log(homepageData);
      setHomeData(_get(homepageData, ["data", "cards"], []));
    };
    loadData();
  }, []);

  console.log("homepage data", homeData);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
