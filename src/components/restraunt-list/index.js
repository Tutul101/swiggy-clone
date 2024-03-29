import React, { useEffect, useState } from "react";
import _get from "lodash/get";
import Headline from "../headline";
import { Link } from "react-router-dom";
import RestrauntCard from "../restraunt-card";
import "./restraunt-list.scss";

const RestrauntList = ({ restrauntList }) => {
  console.log("restrauntList", restrauntList);
  const sectionTitle = _get(restrauntList, ["0", "card", "card", "title"], "");
  const gridItems = _get(
    restrauntList,
    ["2", "card", "card", "gridElements", "infoWithStyle", "restaurants"],
    []
  );
  console.log("grid items", gridItems);
  const [restraunts, setRestraunts] = useState([]);
  useEffect(() => {
    setRestraunts(gridItems);
  }, [restrauntList]);
  return (
    <div className="restraunt-list-wrapper">
      <Headline title={sectionTitle} />
      <div className="restraunt-container">
        {restraunts.map((restraunt) => {
          console.log("restraunt", restraunt);
          const { info } = restraunt;
          const deliveryTime = info.sla.slaString;
          return (
            <Link to={`restraunt/${info.id}`} key={info.id}>
              <RestrauntCard
                image={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
                name={info.name}
                rating={info.avgRating}
                deliveryTime={deliveryTime}
                cuisines={info.cuisines}
                location={info.areaName}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntList;
