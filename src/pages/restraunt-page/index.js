import React, { useEffect, useState } from "react";
import _get from "lodash/get";
import { useParams } from "react-router-dom";
import { getRestrauntPageData } from "../../helper/api";
import RestrauntPageHeader from "../../components/restraunt-page-header";
import MenuItem from "../../components/menu-item";

const RestrauntPage = () => {
  const [restrauntInfo, setRestrauntInfo] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const data = await getRestrauntPageData(resId);
      console.log("Restraunt page data", data.data.cards);
      setRestrauntInfo(data.data.cards);
    };
    loadData();
  }, []);

  if (restrauntInfo.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <RestrauntPageHeader restrauntDetails={restrauntInfo[2]} />
      <div style={{ marginTop: "2rem" }}>
        <MenuItem />
      </div>
    </div>
  );
};

export default RestrauntPage;
