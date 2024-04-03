import React from "react";
import _get from "lodash/get";
import { useParams } from "react-router-dom";

import RestrauntPageHeader from "../../components/restraunt-page-header";
import MenuItem from "../../components/menu-item";
import useLoadRestrauntData from "../../utils/useLoadRestrauntData";
import MenuList from "../../components/menu-list";

const RestrauntPage = () => {
  const { resId } = useParams();
  const { data: restrauntInfo } = useLoadRestrauntData(resId, []);
  console.log("restrauntInfo", restrauntInfo[4]);

  if (restrauntInfo.length === 0) {
    return <h1>Loading...</h1>;
  }

  const menuList = _get(
    restrauntInfo,
    [4, "groupedCard", "cardGroupMap", "REGULAR", "cards"],
    []
  );

  console.log("menuList", menuList);
  return (
    <div>
      <RestrauntPageHeader restrauntDetails={restrauntInfo[2]} />

      <div>
        {menuList.slice(1, menuList.length - 2).map((item, index) => {
          return <MenuList menuSection={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RestrauntPage;
