import React from "react";
import _get from "lodash/get";

import CusineCard from "../../components/cuisine-card";
import Caraousel from "../../components/common/caraousel";

const HeroCarousel1 = ({ cards }) => {
  console.log("Carousel Cards", cards);
  const itemCards = _get(cards, ["imageGridCards", "info"], []);
  console.log("image cards", itemCards);
  return (
    <div>
      <div style={{ fontSize: "40px" }}>
        <Caraousel>
          {itemCards &&
            itemCards.map((cardItem) => {
              const { imageId, action } = cardItem;
              return (
                <CusineCard
                  imageUrl={cardItem && imageId}
                  alt={cardItem && action.text}
                />
              );
            })}
        </Caraousel>
      </div>
    </div>
  );
};

export default HeroCarousel1;
