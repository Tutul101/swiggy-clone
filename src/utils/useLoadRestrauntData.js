import { useEffect, useState } from "react";
import { getRestrauntPageData } from "../helper/api";

const useLoadRestrauntData = (restrauntId, initialData) => {
  const [data, setData] = useState(initialData);

  const getData = async () => {
    try {
      const resPonseData = await getRestrauntPageData(restrauntId);
      setData(resPonseData.data.cards);
    } catch (err) {
      console.log("Restraunt page api error", err);
    }
  };

  useEffect(() => {
    // fetch Data
    getData();
  }, []);

  return {
    data,
  };
};

export default useLoadRestrauntData;
