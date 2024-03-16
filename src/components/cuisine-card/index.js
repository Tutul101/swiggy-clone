import React from "react";
import { imageBaseUrl } from "../../constant";

import "./cusine-card.scss";

const CusineCard = ({ imageUrl, ...props }) => {
  return (
    <img
      className="cusine-card-image"
      src={`${imageBaseUrl}${imageUrl}`}
      {...props}
    />
  );
};

export default CusineCard;
