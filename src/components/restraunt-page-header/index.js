import React from "react";
import _get from "lodash/get";

import "./restraunt-page-header.scss";
import RatingIcon from "../../assets/icons/rating-icon";

const RestrauntPageHeader = ({ restrauntDetails }) => {
  const info = _get(restrauntDetails, ["card", "card", "info"], "");
  const restrauntName = info.name;
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    cuisines,
  } = info;
  const deliveryTime = _get(info, ["sla", "slaString"], "");
  const feeDetails = _get(info, ["feeDetails", "message"], "");

  return (
    <div className="restraunt-page-header">
      <h1 className="restraunt-name">{restrauntName}</h1>

      <div className="header-wrapper-component">
        <div className="header-container">
          <div className="header-rating">
            <div className="rating">
              <RatingIcon />
              {avgRating} ({totalRatingsString})
            </div>
            <div className="price-for-two">{costForTwoMessage}</div>
          </div>
          <div className="cuisines">
            {cuisines.map((item) => {
              return (
                <div key={item} className="cuisine">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="info">
            <div className="distance-icon">
              <div className="circle"></div>
              <div className="bar"></div>
              <div className="circle"></div>
            </div>
            <div className="location-and-time">
              <div className="location">
                Outlet
                <span className="location-name">{areaName}</span>
              </div>

              <div className="delivery-time">{deliveryTime}</div>
            </div>
          </div>
          <hr></hr>
          <div
            className="distance"
            dangerouslySetInnerHTML={{ __html: feeDetails }}></div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntPageHeader;
