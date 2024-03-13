import React from "react";

import RatingIcon from "../../assets/icons/rating-icon";
import "./restrauntCard.scss";

const RestrauntCard = ({
  image,
  name,
  rating,
  deliveryTime,
  cuisines,
  location,
}) => {
  // Image ratio 39 . 26
  return (
    <div className="restraunt-card-wrapper">
      <div className="top-half">
        <img src={image} className="restraunt-image" />
      </div>
      <div className="bottom-half">
        <div className="restraunt-name">{name}</div>
        <div className="restraunt-rating">
          <RatingIcon width={15} height={15} />
          <div className="rating">{rating}</div>
          <div className="delivery-time">{deliveryTime}</div>
        </div>
        <div className="cuisines-list">
          {cuisines.map((cuisine, index) => (
            <React.Fragment key={index}>{cuisine},</React.Fragment>
          ))}
        </div>
        <div className="location">{location}</div>
      </div>
    </div>
  );
};

export default RestrauntCard;
