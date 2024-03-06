import React from "react";
import _get from "lodash/get";

import CusineCard from "../../components/cuisine-card";

const HeroCarousel1 = ({ cards }) => {
  console.log("Carousel Cards", cards);
  const itemCards = _get(cards, ["imageGridCards", "info"], []);
  console.log("image cards", itemCards);
  return (
    <div>
      <CusineCard
        imageUrl={itemCards && itemCards[0] && itemCards[0].imageId}
        alt={itemCards && itemCards[0] && itemCards[0].action.text}
      />
      <CusineCard
        imageUrl={itemCards && itemCards[1] && itemCards[1].imageId}
        alt={itemCards && itemCards[0] && itemCards[0].action.text}
      />
      <CusineCard
        imageUrl={itemCards && itemCards[2] && itemCards[2].imageId}
        alt={itemCards && itemCards[0] && itemCards[0].action.text}
      />
      <CusineCard
        imageUrl={itemCards && itemCards[3] && itemCards[3].imageId}
        alt={itemCards && itemCards[0] && itemCards[0].action.text}
      />
      <CusineCard
        imageUrl={itemCards && itemCards[4] && itemCards[4].imageId}
        alt={itemCards && itemCards[0] && itemCards[0].action.text}
      />
    </div>
  );
};

export default HeroCarousel1;
