import React, { useEffect, useState } from "react";
import _get from "lodash/get";
import { useParams } from "react-router-dom";
import { getRestrauntPageData } from "../../helper/api";
import RestrauntPageHeader from "../../components/restraunt-page-header";

const RestrauntPage = () => {
  const [restrauntInfo, setRestrauntInfo] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const data = await getRestrauntPageData(resId);
      // console.log("Restraunt page data", data.data.cards);
      setRestrauntInfo(data.data.cards);
    };
    loadData();
  }, []);

  if (restrauntInfo.length === 0) {
    return <h1>Loading...</h1>;
  }
  const restrauntName = _get(restrauntInfo, ["0", "card", "card", "text"], "");
  return (
    <div>
      <RestrauntPageHeader restrauntDetails={restrauntInfo[2]} />
    </div>
  );
};

export default RestrauntPage;
