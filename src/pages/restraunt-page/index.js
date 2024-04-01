import React from "react";
import _get from "lodash/get";
import { useParams } from "react-router-dom";

import RestrauntPageHeader from "../../components/restraunt-page-header";
import MenuItem from "../../components/menu-item";
import useLoadRestrauntData from "../../utils/useLoadRestrauntData";

const RestrauntPage = () => {
  const { resId } = useParams();
  const { data: restrauntInfo } = useLoadRestrauntData(resId, []);
  console.log("restrauntInfo", restrauntInfo);

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
